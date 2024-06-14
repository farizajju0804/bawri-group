import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CompanyImageHeader from '../components/company-image-header/company-image-header';
import TestimonialCompany from '../components/testimonial-company/testimonialCompany';
import HowWeStarted from '../components/how-we-started/howWeStarted';

import AboutCompanyNp from '../components/About-company-np/aboutCompanynp';
import TitleAndYearNp from '../components/titleAndYearNp/titleAndYearNp';
import HighlightMomentNonprofit from '../components/highlight-moment-2/highlightMomentNonprofit';

const NonProfitCompanyPage = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const overflow = {
    overflowX: 'hidden',
    width : '100%'
  
  }
  useEffect(() => {
    fetch('/non-profit-companies.json')
      .then(response => response.json())
      .then(data => {
        const selectedCompany = data.nonProfit.find(company => company.id === id);
        setCompany(selectedCompany);
      });
  }, [id]);

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <div style={overflow}>
      <CompanyImageHeader
        categoryName={company.categoryName} 
        bgImageUrl={company.bgImageUrl} 
      />
      <TitleAndYearNp
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
      <AboutCompanyNp
        aboutImg={company.aboutCompany.aboutImg}
        companyName={company.companyName}
        content={company.aboutCompany.content}
      />
      <HighlightMomentNonprofit
        year={company.highlightMoment.year}
        location={company.highlightMoment.location}
        content={company.highlightMoment.content}
        momentName={company.highlightMoment.momentName}
        highlightImg={company.highlightMoment.highlightImg}
      />
    </div>
  );
};

export default NonProfitCompanyPage;
