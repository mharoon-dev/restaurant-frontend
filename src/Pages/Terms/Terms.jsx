import "./Terms.css";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";

export const Terms = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Banner
        img="https://img.freepik.com/premium-photo/woman-is-holding-plate-food-possibly-salad-is-wearing-apron_957244-19884.jpg?w=1380"
        text="Terms and Conditions"
      />

      <div className="container">
        <div className="row gap-4">
          <div className="col-12">
            <h1 className="text-center termsH1">Terms & Conditions</h1>
          </div>

          <div className="col-12">
            {/* <span className="termsSpan">
              terms Policy for Namaste Village Indian Restaurant All locations
              (Norwich, Cambridge and London)
            </span> */}
          </div>
          <div className="col-12">
            <p className="termsP">
              This website is operated by Namaste Village Norwich Limited .
              Throughout the site, the terms “we”, “us” and “our” refer to
              Namaste Village Norwich Limited . Namaste Village Norwich Limited
              offers this website, including all information, tools and services
              available from this site to you, the user, conditioned upon your
              acceptance of all terms, conditions, policies and notices stated
              here. The following information applies to all our restaurants and
              ventures at all locations in the UK.
            </p>
          </div>
          <div className="col-12">
            <p className="termsP">
              By visiting our site and/ or purchasing something from us, you
              engage in our “Service” and agree to be bound by the following
              terms and conditions (“Terms of Service”, “Terms”), including
              those additional terms and conditions and policies referenced
              herein and/or available by hyperlink. These Terms of Service apply
              to all users of the site, including without limitation users who
              are browsers, vendors, customers, merchants, and/ or contributors
              of content.
            </p>
          </div>
          <div className="col-12">
            <p className="termsP">
              Please read these Terms of Service carefully before accessing or
              using our website. By accessing or using any part of the site, you
              agree to be bound by these Terms of Service. If you do not agree
              to all the terms and conditions of this agreement, then you may
              not access the website or use any services. If these Terms of
              Service are considered an offer, acceptance is expressly limited
              to these Terms of Service.
            </p>
          </div>
          <div className="col-12">
            <p className="termsP">
              Any new features or tools which are added to the current store
              shall also be subject to the Terms of Service. You can review the
              most current version of the Terms of Service at any time on this
              page. We reserve the right to update, change or replace any part
              of these Terms of Service by posting updates and/or changes to our
              website. It is your responsibility to check this page periodically
              for changes. Your continued use of or access to the website
              following the posting of any changes constitutes acceptance of
              those changes.
            </p>
          </div>
          <div className="col-12">
            <p className="termsP">
              Our store is hosted on Shopify Inc. They provide us with the
              online e-commerce platform that allows us to sell our products and
              services to you.
            </p>
          </div>
          <div className="col-12">
            <p className="termsP">
              By agreeing to these Terms of Service, you represent that you are
              at least the age of majority in your state or province of
              residence, or that you are the age of majority in your state or
              province of residence and you have given us your consent to allow
              any of your minor dependents to use this site.
            </p>
          </div>
          <div className="col-12">
            <p className="termsP">
              You may not use our products for any illegal or unauthorized
              purpose nor may you, in the use of the Service, violate any laws
              in your jurisdiction (including but not limited to copyright
              laws).
            </p>
          </div>
          <div className="col-12">
            <p className="termsP">
              You must not transmit any worms or viruses or any code of a
              destructive nature.
            </p>
          </div>
          <div className="col-12">
            <p className="termsP">
              A breach or violation of any of the Terms will result in an
              immediate termination of your Services.
            </p>
          </div>
          <div className="col-12">
            <p className="termsP">What cookies we use</p>
          </div>
          <div className="col-12">
            <p className="termsP">
              We may use cookies (and other technology) to improve the
              performance of our website and to personalise your experience,
              including showing you relevant advertising on social media
              platforms and other advertising platforms (Further detail below.)
            </p>
          </div>
          <div className="col-12">
            <span className="termsSpan">SECTION 2 – GENERAL CONDITIONS</span>
          </div>
          <div className="col-12">
            <p className="termsP">
              We reserve the right to refuse service to anyone for any reason at
              any time.
            </p>
          </div>
          <div className="col-12">
            <p className="termsP">
              You understand that your content (not including credit card
              information), may be transferred unencrypted and involve (a)
              transmissions over various networks; and (b) changes to conform
              and adapt to technical requirements of connecting networks or
              devices. Credit card information is always encrypted during
              transfer over networks.
            </p>
          </div>
          <div className="col-12">
            <p className="termsP">Third party links</p>
          </div>
          <div className="col-12">
            <p className="termsP">
              Our website may contain links to other sites and platforms (such
              as our reservations provider) which are not owned or managed by
              us, and which have their own privacy policies. (Further detail
              below.)
            </p>
          </div>
          <div className="col-12">
            <p className="termsP">
              You agree not to reproduce, duplicate, copy, sell, resell or
              exploit any portion of the Service, use of the Service, or access
              to the Service or any contact on the website through which the
              service is provided, without express written permission by us.
            </p>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};
