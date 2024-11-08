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
            <p className="termsP">
              DishDelight is operated by DishDelight Limited. Throughout this
              site, the terms “we,” “us,” and “our” refer to DishDelight
              Limited. We provide this website, including all information,
              tools, and services available to you, the user, conditioned upon
              your acceptance of all terms, conditions, policies, and notices
              stated herein. This information applies to all services we offer.
            </p>
          </div>
          <div className="col-12">
            <p className="termsP">
              By visiting our site and/or purchasing from us, you engage in our
              “Service” and agree to be bound by these terms and conditions
              (“Terms of Service,” “Terms”). These Terms apply to all users,
              including browsers, vendors, customers, and contributors
            </p>
          </div>
          <div className="col-12">
            <p className="termsP">
              Please read these Terms of Service carefully before accessing or
              using our website. By using any part of the site, you agree to be
              bound by these Terms. If you do not agree to all terms, you may
              not access the website or use our services. If these Terms are
              considered an offer, acceptance is expressly limited to these
              Terms
            </p>
          </div>
          <div className="col-12">
            <p className="termsP">
              New features or tools added to the current platform shall also be
              subject to these Terms. You can review the most current version of
              the Terms at any time on this page. We reserve the right to
              update, change, or replace any part of these Terms by posting
              updates to our website. It is your responsibility to check this
              page periodically for changes. Your continued use of the website
              following the posting of changes constitutes acceptance of those
              changes.
            </p>
          </div>
          <div className="col-12">
            <p className="termsP">
              Our site is designed and developed by CodeFusion Solutions,
              enabling us to deliver top-notch food delivery services to you.
            </p>
          </div>
          <div className="col-12">
            <p className="termsP">
              By agreeing to these Terms, you represent that you are of legal
              age in your jurisdiction or have obtained consent from a parent or
              guardian for minors using this site.
            </p>
          </div>
          <div className="col-12">
            <p className="termsP">
              You may not use our services for any illegal or unauthorized
              purpose, nor may you violate any laws in your jurisdiction,
              including copyright laws.
            </p>
          </div>
          <div className="col-12">
            <p className="termsP">
              You must not transmit any worms, viruses, or any code of a
              destructive nature.
            </p>
          </div>
          <div className="col-12">
            <p className="termsP">
              A breach of any Terms will result in immediate termination of your
              Services.
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
