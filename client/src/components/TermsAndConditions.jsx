import tmdbLogo from "../assets/tmdb-logo.svg";

const TermsAndConditions = () => {
  return (
    <div className="text-center text-white mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Impressum and Terms & Conditions
      </h1>

      <div>
        <h2 className="text-md font-bold mb-2">Impressum</h2>
        <p>Information according to § 5 TMG</p>
        <p>Website Operators:</p>
        <p className="py-1">Nikolay Kolomitsev</p>
        <p className="py-1">Hyeongwook Jang</p>
        <p className="py-1">Vladimir Gerov</p>
      </div>

      <div className="my-5">
        <h2 className="text-md font-bold mb-2">Contact</h2>
        <p>Email: moviemap.me@gmail.com</p>
        <p>Responsible for the content according to § 55 Abs. 2 RStV:</p>
        <p className="py-1">Nikolay Kolomitsev</p>
        <p className="py-1">Hyeongwook Jang</p>
        <p className="py-1">Vladimir Gerov</p>
      </div>

      <div>
        <h2 className="text-md font-bold mb-2">Disclaimer</h2>
        <h3 className="text-md font-bold mb-2">Liability for Content</h3>
        <p className="text-pretty">
          As service providers, we are responsible for our own content on these
          pages according to § 7 Abs.1 TMG. However, according to §§ 8 to 10
          TMG, we are not obligated to monitor transmitted or stored external
          information or to investigate circumstances that indicate illegal
          activity.
        </p>
        <p className="text-pretty">
          Obligations to remove or block the use of information under general
          laws remain unaffected. However, liability in this regard is only
          possible from the time of knowledge of a specific infringement. Upon
          becoming aware of such violations, we will remove this content
          immediately.
        </p>
      </div>

      <div className="my-5">
        <h3 className="text-md font-bold mb-2">Liability for Links</h3>
        <p>
          Our offer contains links to external websites of third parties, over
          whose content we have no influence. Therefore, we cannot assume any
          liability for these external contents. The respective provider or
          operator of the pages is always responsible for the content of the
          linked pages. The linked pages were checked for possible legal
          violations at the time of linking. Illegal contents were not
          recognizable at the time of linking.
        </p>
        <p>
          However, permanent control of the content of the linked pages is not
          reasonable without concrete evidence of an infringement. Upon
          notification of violations, we will remove such links immediately.
        </p>
      </div>

      <div>
        <h3 className="text-md font-bold mb-2">Copyright</h3>
        <p>
          The content and works created by the site operators on these pages are
          subject to German copyright law. The duplication, processing,
          distribution, and any kind of exploitation outside the limits of
          copyright require the written consent of the respective author or
          creator. Downloads and copies of this site are only permitted for
          private, non-commercial use.
        </p>
        <p>
          Insofar as the content on this site was not created by the operator,
          the copyrights of third parties are respected. In particular,
          third-party content is marked as such. Should you become aware of a
          copyright infringement, please notify us accordingly. Upon
          notification of violations, we will remove such content immediately.
        </p>
      </div>

      <div className="my-5">
        <h3 className="text-md font-bold mb-2">
          Disclaimer for Use of the Product
        </h3>
        <p>
          We do not assume any responsibility or liability for any damages or
          losses resulting from the use of our product. The use of our product
          is at the user's own risk and discretion. By using our product, you
          agree that you do so voluntarily and that you are fully responsible
          for any outcomes that may result. We provide our product "as is"
          without any warranties of any kind, either express or implied,
          including but not limited to, implied warranties of merchantability
          and fitness for a particular purpose.
        </p>
      </div>

      <div>
        <h2 className="text-md font-bold mb-2">Terms and Conditions</h2>
        <h3 className="text-md font-bold mb-2">1. Acceptance of Terms</h3>
        <p>
          By accessing or using MovieMap.me ("the Application"), you agree to be
          bound by these Terms and Conditions. If you do not agree to these
          terms, please do not use the Application.
        </p>
      </div>

      <div className="my-5">
        <h3>2. Description of Service</h3>
        <p>
          MovieMap.me provides AI-enhanced movie recommendations and a personal
          movie library. The Application is intended for personal,
          non-commercial use.
        </p>
      </div>

      <div>
        <h3 className="text-md font-bold mb-2">3. User Responsibilities</h3>
        <ul>
          <li>You agree to use the Application at your own risk.</li>
          <li>
            You are responsible for maintaining the confidentiality of your
            account information, including your password, and for all activities
            that occur under your account.
          </li>
          <li>
            You agree not to use the Application for any unlawful or prohibited
            activities.
          </li>
        </ul>
      </div>

      <div className="my-5">
        <h3 className="text-md font-bold mb-2">4. Data Privacy and Security</h3>
        <ul>
          <li>
            We take reasonable measures to protect the information provided by
            users. However, we do not guarantee that your use of the Application
            will be secure or that your information will not be intercepted
            while being transmitted to us.
          </li>
          <li>
            You acknowledge that any information or data shared with the
            Application is done at your own risk.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-md font-bold mb-2">5. Limitation of Liability</h3>
        <ul className="grid gap-2">
          <li>
            MovieMap.me, its affiliates, and its licensors are not liable for
            any direct, indirect, incidental, special, consequential, or
            punitive damages arising out of your access to, use of, or inability
            to use the Application.
          </li>
          <li>
            This includes, but is not limited to, any loss or damage to your
            data, loss of revenue or anticipated profits, or claims by third
            parties.
          </li>
          <li>
            <img
              width={160}
              src={tmdbLogo}
              alt="The Movie Data Base Logo"
              className="mx-auto"
            />
          </li>
          <li className="text-md font-bold mb-2">
            This (website, program, service, application, product) uses TMDB and
            the TMDB APIs but is not endorsed, certified, or otherwise approved
            by TMDB.
          </li>
        </ul>
      </div>

      <div className="my-5">
        <h3 className="text-md font-bold mb-2">6. Disclaimer of Warranties</h3>
        <ul>
          <li>
            The Application is provided "as is" and "as available," without
            warranties of any kind, either express or implied, including but not
            limited to, implied warranties of merchantability, fitness for a
            particular purpose, or non-infringement.
          </li>
          <li>
            We do not warrant that the Application will be uninterrupted or
            error-free, nor do we make any warranty as to the results that may
            be obtained from the use of the Application.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-md font-bold mb-2">7. Indemnification</h3>
        <p>
          You agree to indemnify, defend, and hold harmless MovieMap.me, its
          affiliates, officers, directors, employees, and agents from and
          against any claims, liabilities, damages, losses, and expenses,
          including, without limitation, reasonable legal fees and costs,
          arising out of or in any way connected with your access to or use of
          the Application.
        </p>
      </div>

      <div className="my-5">
        <h3 className="text-md font-bold mb-2">
          8. Changes to the Terms and Conditions
        </h3>
        <p>
          We reserve the right to modify these Terms and Conditions at any time.
          Your continued use of the Application following any changes signifies
          your acceptance of the new Terms and Conditions.
        </p>
      </div>

      <div>
        <h3 className="text-md font-bold mb-2">9. Governing Law</h3>
        <p>
          These Terms and Conditions are governed by and construed in accordance
          with the laws of Germany, without regard to its conflict of law
          principles.
        </p>
      </div>

      <div className="my-5">
        <h3 className="text-md font-bold mb-2">10. Contact Information</h3>
        <p>
          If you have any questions about these Terms and Conditions, please
          contact us at{" "}
          <a href="mailto:moviemap.me@gmail.com">moviemap.me@gmail.com</a>.
        </p>
      </div>

      <hr />

      <footer className="text-sm my-5">
        <p>
          By using MovieMap.me, you acknowledge that you have read, understood,
          and agree to be bound by these Terms and Conditions.
        </p>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
