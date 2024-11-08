import "./DeliveryPolicy.css";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";

export const DeliveryPolicy = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Banner
        img="
        https://www.shutterstock.com/image-vector/banner-design-smartphone-food-delivery-260nw-2240547755.jpg
        "
        text="delivery Policy "
      />

      <div className="container">
        <div className="row gap-4">
          <div className="col-12">
            <h1 className="text-center deliveryPolicyH1">Delivery Policy</h1>
          </div>

          <div className="col-12">
            {/* <span className="deliveryPolicySpan">
              deliveryPolicy Policy for Namaste Village Indian Restaurant All locations
              (Norwich, Cambridge and London)
            </span> */}
          </div>
          <div className="col-12">
            <p className="deliveryPolicyP">
              DishDelight is proudly operated by DishDelight Limited. Throughout
              our website, the terms “we,” “us,” and “our” refer to DishDelight
              Limited. We provide a comprehensive platform, offering a range of
              food delivery services, tools, and information to you, the user,
              conditioned upon your acceptance of all delivery policies,
              conditions, and notices stated herein.
            </p>
          </div>
          <div className="col-12">
            <p className="deliveryPolicyP">
              By visiting our site and/or placing an order with us, you engage
              in our “Service” and agree to be bound by these delivery policies
              and conditions (“Delivery Policy of Service,” “Delivery Policy”).
              This policy applies to all users of the site, including browsers,
              vendors, customers, and contributors.
            </p>
          </div>
          <div className="col-12">
            <p className="deliveryPolicyP">
              Please read these Delivery Policies carefully before accessing or
              using our website. By using any part of the site, you agree to
              comply with these policies. If you do not agree to all policies
              and conditions, you may not access the website or utilize our
              services. Any new features or tools added to our platform will
              also be subject to these Delivery Policies. You can review the
              most current version at any time on this page. We reserve the
              right to update, change, or replace any part of these policies by
              posting updates on our website. It is your responsibility to check
              this page periodically for changes, and your continued use of the
              website following changes constitutes acceptance of those updates.
            </p>
          </div>
          <div className="col-12">
            <p className="deliveryPolicyP">
              Our website is expertly designed and developed by CodeFusion
              Solutions, enabling us to deliver exceptional food delivery
              experiences.
            </p>
          </div>
          <div className="col-12">
            <p className="deliveryPolicyP">
              By agreeing to these Delivery Policies, you affirm that you are of
              legal age in your jurisdiction or have consent from a parent or
              guardian for minors using this site.
            </p>
          </div>
          <div className="col-12">
            <p className="deliveryPolicyP">
              You may not use our services for any illegal or unauthorized
              purposes, nor may you violate any laws in your jurisdiction,
              including copyright laws.
            </p>
          </div>
          <div className="col-12">
            <p className="deliveryPolicyP">
              You must not transmit any harmful code or viruses.
            </p>
          </div>
          <div className="col-12">
            <p className="deliveryPolicyP">
              A breach of any policies will result in immediate termination of
              your Services.
            </p>
          </div>

          <div className="col-12">
            <p className="deliveryPolicyP">
              A breach or violation of any of the deliveryPolicy will result in
              an immediate termination of your Services.
            </p>
          </div>
          <div className="col-12">
            <p className="deliveryPolicySpan">Cookies Policy</p>
          </div>
          <div className="col-12">
            <p className="deliveryPolicyP">
              We utilize cookies and similar technologies to enhance website
              performance and personalize your experience, including targeted
              advertising across social media and other platforms.
            </p>
          </div>
          <div className="col-12">
            <span className="deliveryPolicySpan">
              SECTION 2 – GENERAL CONDITIONS
            </span>
          </div>
          <div className="col-12">
            <p className="deliveryPolicyP">
              We reserve the right to refuse service to anyone for any reason at
              any time.
            </p>
          </div>
          <div className="col-12">
            <p className="deliveryPolicyP">
              You understand that your content (excluding credit card
              information) may be transferred unencrypted and involve (a)
              transmissions over various networks; and (b) changes to conform to
              technical requirements. Credit card information is always
              encrypted during transfer.
            </p>
          </div>
          <div className="col-12">
            <p className="deliveryPolicySpan">Third-Party Links</p>
          </div>
          <div className="col-12">
            <p className="deliveryPolicyP">
              Our website may contain links to third-party sites and platforms
              that are not owned or managed by us and have their own privacy
              policies.
            </p>
          </div>
          <div className="col-12">
            <p className="deliveryPolicyP">
              You agree not to reproduce, duplicate, copy, sell, resell, or
              exploit any portion of the Service without express written
              permission from us.
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
