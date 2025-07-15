
import React, { useState, useEffect } from 'react';
import { getEducationalContent } from '../services/geminiService';
import { EducationalArticle } from '../types';
import { BookOpenIcon } from './icons/UIIcons';

const ArticleCard: React.FC<{ article: EducationalArticle }> = ({ article }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <h4 className="text-lg font-bold text-cust-blue">{article.title}</h4>
    <p className="mt-2 text-slate-600">{article.summary}</p>
    <a href="#" className="mt-4 inline-block font-semibold text-cust-green hover:underline">Read More &rarr;</a>
  </div>
);

export const EducationalResources: React.FC = () => {
  const [articles, setArticles] = useState<EducationalArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      const content = await getEducationalContent();
      setArticles(content);
      setLoading(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    fetchContent();
  }, []);

  return (
    <section className="mt-16 md:mt-24">
      <div className="text-center mb-10">
        <div className="flex justify-center items-center gap-2">
            <BookOpenIcon className="w-8 h-8 text-cust-brown" />
            <h2 className="text-3xl font-extrabold text-slate-800">Knowledge Center</h2>
        </div>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-slate-600">
          Empowering you with knowledge for the advancement of mankind.
        </p>
      </div>
      {loading ? (
        <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-md border border-slate-200 animate-pulse">
                    <div className="h-6 bg-slate-200 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-slate-200 rounded w-full mb-2"></div>
                    <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                </div>
            ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      )}
    </section>
  );
};
