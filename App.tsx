
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VerificationResultDisplay } from './components/VerificationResultDisplay';
import { EducationalResources } from './components/EducationalResources';
import { Footer } from './components/Footer';
import { ReportModal } from './components/ReportModal';
import { verifyDrug } from './services/geminiService';
import { VerificationResult, VerificationStatus, VerificationMethod } from './types';

export default function App() {
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationMethod, setVerificationMethod] = useState<VerificationMethod>('code');
  const [result, setResult] = useState<VerificationResult>({ status: VerificationStatus.IDLE });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reportedCode, setReportedCode] = useState('');

  const handleVerification = useCallback(async () => {
    if (!verificationCode.trim()) {
      const message = verificationMethod === 'code' 
        ? 'Please enter a verification code.' 
        : 'Please enter a drug name.';
      setResult({ status: VerificationStatus.ERROR, message });
      return;
    }
    setResult({ status: VerificationStatus.LOADING });
    try {
      const apiResult = await verifyDrug(verificationCode, verificationMethod);
      setResult(apiResult);
    } catch (error)
 {
      console.error('Verification failed:', error);
      setResult({ status: VerificationStatus.ERROR, message: 'An unexpected error occurred. Please try again later.' });
    }
  }, [verificationCode, verificationMethod]);

  const handleOpenReportModal = useCallback(() => {
    setReportedCode(verificationCode);
    setIsModalOpen(true);
  }, [verificationCode]);

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-800">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Hero
            verificationCode={verificationCode}
            setVerificationCode={setVerificationCode}
            onVerify={handleVerification}
            isLoading={result.status === VerificationStatus.LOADING}
            verificationMethod={verificationMethod}
            setVerificationMethod={setVerificationMethod}
          />
          <VerificationResultDisplay 
            result={result} 
            onReport={handleOpenReportModal} 
            verificationMethod={verificationMethod}
          />
        </div>
        <EducationalResources />
      </main>
      <Footer />
      {isModalOpen && (
        <ReportModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          drugCode={reportedCode}
        />
      )}
    </div>
  );
}
