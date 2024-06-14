import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CompanyImageHeader from '../components/company-image-header/company-image-header';
import TitleAndYear from '../components/titleAndYear/titleAndYear';
import TestimonialCompany from '../components/testimonial-company/testimonialCompany';
import HowWeStarted from '../components/how-we-started/howWeStarted';
import AboutCompany from '../components/About-company/aboutCompany';
import HighlightMomentprofit from '../components/highlight-moment-1/highlightMomentprofit';

const CompanyPage = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    fetch('/companies.json')
      .then(response => response.json())
      .then(data => {
        const selectedCompany = data.forProfit.find(company => company.id === id);
        setCompany(selectedCompany);
      });
  }, [id]);

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <div>
      <CompanyImageHeader
        categoryName={company.categoryName} 
        bgImageUrl={company.bgImageUrl} 
      />
      <TitleAndYear
        companyName={company.companyName} 
        year={company.year} 
        bgImageUrl={company.bgImageUrl} 
      />
      <TestimonialCompany 
        authorName={company.testimonial.authorName}
        testimonialContent={company.testimonial.content}
      />
      <HowWeStarted
        content={company.howWeStarted.content}
        bgImageUrl={company.howWeStarted.bgImageUrl}
        leftImageUrl={company.howWeStarted.leftImageUrl}
        rightImageUrl={company.howWeStarted.rightImageUrl}
        headingColor={company.howWeStarted.headingColor}
      />
      <AboutCompany
        aboutImg={company.aboutCompany.aboutImg}
        companyName={company.companyName}
        content={company.aboutCompany.content}
      />
      <HighlightMomentprofit
        year={company.highlightMoment.year}
        location={company.highlightMoment.location}
        content={company.highlightMoment.content}
        momentName={company.highlightMoment.momentName}
        highlightImg={company.highlightMoment.highlightImg}
      />
    </div>
  );
};

export default CompanyPage;
