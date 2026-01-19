import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../articles';

function Articles() {
  return (
    <div className="articles-list fade-in">
      <h1>사랑에 대한 고찰</h1>
      <p>MBTI와 연애에 대한 다양한 글을 읽어보세요.</p>
      {articles.map(article => (
        <Link to={`/article/${article.slug}`} key={article.id} className="article-card-link">
          <div className="article-card">
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <span>더 읽어보기 &rarr;</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Articles;
