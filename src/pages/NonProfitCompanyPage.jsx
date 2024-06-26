import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CompanyImageHeader from '../components/company-image-header/company-image-header';
import TestimonialCompany from '../components/testimonial-company/testimonialCompany';
import HowWeStarted from '../components/how-we-started/howWeStarted';
import AboutCompanyNp from '../components/About-company-np/aboutCompanynp';
import TitleAndYearNp from '../components/titleAndYearNp/titleAndYearNp';
import HighlightMomentNonprofit from '../components/highlight-moment-2/highlightMomentNonprofit';
import Pagination from '../components/Pagination/Pagination';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'; // Import Breadcrumb

const NonProfitCompanyPage = () => {
  const { id } = useParams();
  const [companies, setCompanies] = useState([]);
  const [company, setCompany] = useState(null);

  useEffect(() => {
    fetch('/non-profit-companies.json')
      .then(response => response.json())
      .then(data => {
        const sortedData = data.nonProfit.sort((a, b) => parseInt(a.year) - parseInt(b.year));
        setCompanies(sortedData);
        const selectedCompany = sortedData.find(company => company.id === id);
        setCompany(selectedCompany);
      });
  }, [id]);

  if (!company) {
    return <div>Company not found</div>;
  }

  const currentIndex = companies.findIndex(comp => comp.id === id);
  const prevCompany = currentIndex > 0 ? companies[currentIndex - 1] : null;
  const nextCompany = currentIndex < companies.length - 1 ? companies[currentIndex + 1] : null;

  const overflow = {
    overflowX: 'hidden',
    width: '100%'
  };

  return (
    <div style={overflow}>
      <Breadcrumb type="non-profit" categoryName={company.categoryName} /> {/* Add Breadcrumb */}
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
      <Pagination
        currentCompany={company}
        prevCompany={prevCompany}
        nextCompany={nextCompany}
        basePath="/non-profit"
      />
    </div>
  );
};

export default NonProfitCompanyPage;
