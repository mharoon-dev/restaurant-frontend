import "./Privacy.css";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
export default function Privacy() {
  return (
    <>
      <Navbar />
      <Banner img="/assets/privacy/banner.avif" text="Privacy Policy" />

      <div className="container">
        <div className="row gap-4">
          <div className="col-12">
            <h1 className="text-center privacyH1">Privacy Policy</h1>
          </div>

          <div className="col-12">
            <span className="privacySpan">
              Privacy Policy for Namaste Village Indian Restaurant All locations
              (Norwich, Cambridge and London)
            </span>
          </div>
          <div className="col-12">
            <p className="privacyP">
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You.
            </p>
          </div>
          <div className="col-12">
            <p className="privacyP">
              We use Your Personal data to provide and improve the Service. By
              using the Service, You agree to the collection and use of
              information in accordance with this Privacy Policy.
            </p>
          </div>
          <div className="col-12">
            <p className="privacyP">IN BRIEF</p>
          </div>
          <div className="col-12">
            <p className="privacyP">Information we collect</p>
          </div>
          <div className="col-12">
            <p className="privacyP">
              We collect personal information when you make a reservation,
              inquiry or a payment, when you buy or redeem vouchers, use our
              wifi and when you get in touch with the reservations and feedback
              team at any of our restaurants. (Further detail below.)
            </p>
          </div>
          <div className="col-12">
            <p className="privacyP">How we use your information</p>
          </div>
          <div className="col-12">
            <p className="privacyP">
              We may use this information to respond to and fulfill your
              requests, manage and promote our restaurants, comply with
              applicable law and as otherwise permitted by applicable law.
              (Further detail below.)
            </p>
          </div>
          <div className="col-12">
            <p className="privacyP">How we share your information</p>
          </div>
          <div className="col-12">
            <p className="privacyP">
              We may share your information with our suppliers to provide
              reservation, wi-fi, CRM, advertising and payment services, or as
              otherwise permitted by applicable law. (Further detail below.)
            </p>
          </div>
          <div className="col-12">
            <p className="privacyP">What cookies we use</p>
          </div>
          <div className="col-12">
            <p className="privacyP">
              We may use cookies (and other technology) to improve the
              performance of our website and to personalise your experience,
              including showing you relevant advertising on social media
              platforms and other advertising platforms (Further detail below.)
            </p>
          </div>
          <div className="col-12">
            <p className="privacyP">How long we hold information</p>
          </div>
          <div className="col-12">
            <p className="privacyP">
              We will generally keep your information stored for up to two
              years, unless you have withdrawn your consent for us to do so. We
              may also be obliged to keep your information longer if necessary
              to comply with the law or under our contracts with you. (Further
              detail below.) International transfers
            </p>
          </div>
          <div className="col-12">
            <p className="privacyP">
              We may need to transfer your information outside of the UK or the
              EEA. To protect your information, any such international transfers
              will be made in accordance with applicable law and we will ensure
              appropriate safeguards are put in place. (Further detail below.)
            </p>
          </div>
          <div className="col-12">
            <p className="privacyP">Third party links</p>
          </div>
          <div className="col-12">
            <p className="privacyP">
              Our website may contain links to other sites and platforms (such
              as our reservations provider) which are not owned or managed by
              us, and which have their own privacy policies. (Further detail
              below.)
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
}
