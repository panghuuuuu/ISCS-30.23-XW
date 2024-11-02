import React from 'react';
// import "../stylesheets/App.scss";
import '../stylesheets/PrivacyPolicy.scss';
import Button from './Button';
import Modal from 'react-modal';

const PrivacyPolicy = (props) => {
  Modal.setAppElement('#root');

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.handleCloseModal}
      shouldCloseOnOverlayClick={true}
      contentLabel='PRIVACY POLICY'
      className='max-h-[80vh] absolute top-[10%] px-4 md:px-36 bottom-[10px] flex flex-col z-[999] rounded-3xl outline-none'
      disableAutoFocus={true}
      overlayClassName='modal-overlay-class'
    >
      <div className='bg-primaryBlue pt-8 px-8 pb-6 text-xl text-primaryWhite rounded-t-3xl uppercase'>
        <h1>Privacy Policy</h1>
      </div>
      <div className='h-[80%] p-8 bg-primaryWhite text-primaryBlue overflow-y-auto'>
        <p class="mb-4">
          The Ateneo de Manila University Freshman Orientation Seminar (OrSem)
          2024 Organizing Committee (“OrCom”), together with Ateneo de Manila
          University (“University”), respects your right to privacy and aims to
          comply with the requirements of all relevant privacy and data
          protection laws, particularly the Data Privacy Act of 2012. Please
          take the time to read this Privacy Policy which explains how we
          process the information we collect from or generate about you
          throughout the duration of OrSem 2024.
        </p>
        <p>
          Data processing activities conducted by OrCom through OrSem
          initiatives through the official OrSem 2024 website are covered by
          this privacy policy. It may be viewed as the initial pop-up window
          each time the OrSem 2024 website is visited.{' '}
        </p>
        <br />
        <p>
          <b>What We Collect</b>
          <br />
          <br />
          Through your participation in the various activities of OrSem 2024:
          Mithi, OrCom may actively collect and process your personal
          information through online forms, capturing of screenshots, and
          submissions to official OrSem communication channels. Such personal
          information may include:
        </p>
        <br />
        <ul className='list-decimal pl-12'>
          <li>Name</li>
          <li>Ateneo ID Number</li>
          <li>Course</li>
          <li>Contact Information</li>
          <li>Social Media Accounts</li>
          <li>Photos and videos</li>
        </ul>
        <br />
        <p>
          OrCom also uses third party services used in order to track user interaction in
          the website for data gathering to improve user experience.
          In cases where this information is collected or processed through
          social media websites, the Privacy Policies of these individual sites
          will also apply. The only social media websites officially utilized
          for OrSem 2024 are{' '}
          <a className="underline hover:no-underline hover:text-[#222fb8]" href='https://www.facebook.com/about/privacy'>Facebook</a>,{' '}
          <a className="underline hover:no-underline hover:text-[#222fb8]" href='https://help.twitter.com/en/rules-and-policies/update-privacy-policy'>
            Twitter
          </a>
          ,{' '}
          <a className="underline hover:no-underline hover:text-[#222fb8]" href='https://help.instagram.com/155833707900388/%22'>
            Instagram
          </a>
          ,{' '}
          <a className="underline hover:no-underline hover:text-[#222fb8]" href='https://support.google.com/youtube/answer/7671399?hl=en&p=privacy_guidelines'>YouTube</a>
          , and{' '}
          <a className="underline hover:no-underline hover:text-[#222fb8]" href='https://www.tiktok.com/legal/privacy-policy?lang=en'>
            TikTok
          </a>
          .
          <br />
          <br />
        </p>
        <p>
          Similarly, where this information is collected through Google Forms,
          Google’s relevant ​Privacy Policy​ will also apply. When necessary, we
          will ask for your explicit consent when collecting your personal data
          through such forms. Your Google account will be used in order to
          obtain your email address, which will be used to verify your identity
          as a student of the Ateneo de Manila University. This information will
          be kept confidential and will not be shared with any third party.
        </p>
        <p>
          <br />
          <b>Why We Collect</b>
          <br />
          <br />
          The recorded information is used to verify your identity as a bona
          fide Ateneo de Manila University student, to track your participation
          in certain activities, to engage with your content, to respond to your
          queries, and to contact you for further announcements beyond the
          official OrSem 2024 period. Photos and videos, in particular, that
          have been processed as proof of your participation in official OrSem
          activities may be reposted or used by OrCom in OrSem promotional
          materials, with proper credits whenever possible.
        </p>
        <br />
        <p>
          If we need to use any collected information that constitutes personal
          data for purposes not compatible with those listed here, we will
          inform you prior to such use and, where required by law, obtain your
          consent.
        </p>
        <p>
          <br />
          <b>How We Use, Store, and Retain Them</b>
          <br />
          <br />
          All information collected is stored in OrSem’s database that is
          accessible only to OrCom, authorized SubCore members, and OrSem
          moderators. They will be kept for as long as necessary to achieve the
          declared purpose of their collection. After this period, collected
          information is deleted from OrSem’s database. In no case is it shared
          with or transferred to other persons or organizations, unless required
          or permitted by law.
        </p>
        <br />
        <p>
          <b>Your Rights and How To Exercise Them</b>
          <br />
          <br />
          You have rights under the law regarding your personal data. Should you
          wish to exercise them, or if you have some questions relating to the
          University’s data protection efforts, you may contact the University
          Data Protection Officer through the following:
        </p>
        <br />
        <ul className='list-disc pl-12'>
          <li>Questions: info.udpo@ateneo.edu</li>
          <li>Complaints / Security Incidents: alert.udpo@ateneo.edu</li>
          <li>Landline: +63 2 426-6001 loc. 4801</li>
          <li>Website: ateneo.edu/udpo</li>
          <li>
            Address: Room 200, Manila Observatory, Ateneo de Manila University
          </li>
        </ul>
        <br />

        <p>
          You may also contact OrCom for any questions or concerns relating
          specifically to OrSem through the official OrSem email:
          orsem.college@student.ateneo.edu
        </p>

        <p>
          <br />
          <b>Changes to This Policy</b>
          <br />
          <br />
          We may, in certain cases, make changes to this Policy. When
          permissible, we will let you know through other means of
          communication. However, any modification is effective immediately upon
          posting on the official OrSem 2024 website.
        </p>
      </div>
      <div className='privacy-accept bg-primaryBlue flex gap-6 p-8 rounded-b-3xl justify-between flex-wrap-reverse'>
        <span className='justify-center place-self-center text-primaryWhite text-xs sm:text-base text-left flex-grow'>
          By clicking accept, you acknowledge our privacy policy and accept our
          terms and conditions.
          <br />
          <p class="font-semibold mt-1">
            NOTE: In order to enter campus, please download the entry pass beforehand.
          </p>
        </span>
        <Button buttonText='ACCEPT' onClick={props.handleCloseModal} />
      </div>
    </Modal>
  );
};

export default PrivacyPolicy;
