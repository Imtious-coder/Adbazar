import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout/Layout";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <section className="s-space-bottom-full bg-accent-shadow-body">
        <Container>
          <Row className="py-3">
            <Col md={12} className="p-1 p-md-2">
              <div className="gradient-wrapper mb--sm">
                <div className="gradient-title">
                  <h2>Privacy Policy</h2>
                </div>
                <div className="p-2">
                  <div className="section-title-left-dark pb-2">
                    <p className="mb-0">
                      In order for the website to provide a safe and useful
                      service, it is important for Adbazar.net to collect, use,
                      and share personal information.
                    </p>
                  </div>
                  <div>
                    <h6>
                      <b>Collection</b>
                    </h6>
                    <p>
                      Information posted on Adbazar.net is publicly available.
                      If you choose to provide us with personal information, you
                      are consenting to the transfer and storage of that
                      information on our servers. We collect and store the
                      following personal information:
                    </p>
                    <ol>
                      <li>
                        Email address, contact information, and (depending on
                        the service used) sometimes financial information
                        Computer sign-on data, statistics on page views, traffic
                        to and from Adbazar.net and response to advertisements
                      </li>
                      <li>
                        Other information, including users' IP address and
                        standard web log information.
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h6>
                      <b>Use</b>
                    </h6>
                    <p>We use users' personal information to:</p>
                    <ol>
                      <li>Provide our services</li>
                      <li>
                        Resolve disputes, collect fees, and troubleshoot
                        problems
                      </li>
                      <li>Encourage safe trading and enforce our policies</li>
                      <li>
                        Customize users experience, measure interest in our
                        services
                      </li>
                      <li>
                        Improve our services and inform users about services and
                        updates
                      </li>
                      <li>
                        Communicate marketing and promotional offers to you
                        according to your preferences
                      </li>
                      <li>
                        Do other things for users as described when we collect
                        the information
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h6>
                      <b>Disclosure</b>
                    </h6>
                    <p>
                      We don't sell or rent users' personal information to third
                      parties for their marketing purposes without users'
                      explicit consent. We may disclose personal information to
                      respond to legal requirements, enforce our policies,
                      respond to claims that a posting or other content violates
                      other's rights, or protect anyone's rights, property, or
                      safety.
                    </p>
                  </div>
                  <div>
                    <h6>
                      <b>Communication and email tools</b>
                    </h6>
                    <p>
                      You agree to receive marketing communications about
                      consumer goods and services on behalf of our third party
                      advertising partners unless you tell us that you prefer
                      not to receive such communications. If you don't wish to
                      receive marketing communications from us, simply indicate
                      your preference by following directions provided with the
                      communication. You may not use our site or communication
                      tools to harvest addresses, send spam or otherwise breach
                      our Terms of Use or Privacy Policy. We may automatically
                      scan and manually filter email messages sent via our
                      communication tools for malicious activity or prohibited
                      content. If you use our tools to send content to a friend,
                      we don't permanently store your friends' addresses or use
                      or disclose them for marketing purposes. To report spam
                      from other users, please contact customer support.
                    </p>
                  </div>
                  <div>
                    <h6>
                      <b>Security</b>
                    </h6>
                    <p>
                      We use lots of tools (encryption, passwords, physical
                      security) to protect your personal information against
                      unauthorized access and disclosure. All personal
                      electronic details will be kept private by the Service
                      except for those that you wish to disclose. It is
                      unacceptable to disclose the contact information of others
                      through the Service. If you violate the laws of your
                      country of residence and/or the terms of use of the
                      Service you forfeit your privacy rights over your personal
                      information.
                    </p>
                  </div>
                  <div>
                    <h6>
                      <b>Contact details</b>
                    </h6>
                    <p>
                      Customer Support e-mail: 
                      <a href="mailto:adbazar.net@gmail.com">
                        adbazar.net@gmail.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <h6>
                      <b>Unsubscribe information</b>
                    </h6>
                    <p>
                      If at any time you wish to have your information reviewed
                      or removed from our active databases, please contact us
                      at adbazar.net@gmail.com. Additionally, you will be able
                      to unsubscribe anytime by clicking on the unsubscribe link
                      at the bottom of all our email communications. This
                      website makes use of Display Advertising, and uses
                      Re-marketing technology with Google Analytics to advertise
                      online. Third-party vendors, including Google, may show
                      our ads on various websites across the Internet, using
                      first-party cookies and third-party cookies together to
                      inform, optimize, and serve ads based on past visits to
                      our website. Visitors can opt-out of Google Analytics for
                      Display Advertising and customize Google Display Network
                      ads using the Ads Preferences Manager.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}
