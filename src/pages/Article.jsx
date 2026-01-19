import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../articles';

function Article() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="article-page fade-in">
        <h2>아티클을 찾을 수 없습니다.</h2>
        <Link to="/articles">
          <button className="retry-btn">목록으로 돌아가기</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="article-page fade-in">
      <h1>{article.title}</h1>
      <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
      <Link to="/articles">
        <button className="retry-btn">목록으로 돌아가기</button>
      </Link>
    </div>
  );
}

export default Article;
