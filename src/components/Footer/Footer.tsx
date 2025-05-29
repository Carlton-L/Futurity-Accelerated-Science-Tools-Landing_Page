import {
  Box,
  Button,
  CloseButton,
  Dialog,
  Flex,
  Heading,
  Image,
  Link,
  Portal,
  Text,
} from '@chakra-ui/react';
import FuturitySystemsLogo from '../../assets/futurity_systems_logo.svg';
import WomenTechEU from '../../assets/WomenTechEU.png';

const Footer = () => {
  return (
    <Box
      width='100%'
      bg='#1a1a1a'
      padding='16px'
      md={{ padding: '32px' }}
      display='flex'
      justifyContent='center'
    >
      <Flex direction='column' width='100%' maxWidth='1480px'>
        <Flex
          direction='column'
          md={{ flexDirection: 'row', justifyContent: 'space-between' }}
          borderBottom='1px solid white'
          gap='32px'
          py='32px'
        >
          <Flex direction='column' gap='32px'>
            <Image src={FuturitySystemsLogo} maxWidth='256px' />
            <Text color='white' textAlign='left' md={{ maxWidth: '820px' }}>
              Pioneering scientific solutions and innovation for Fortune 500
              companies and givernmental agencies worldwide.
            </Text>
          </Flex>
          <Image src={WomenTechEU} maxWidth='265px' alignSelf='center' />
        </Flex>
        <Flex
          direction='column'
          alignItems='center'
          gap='32px'
          lg={{ flexDirection: 'row', justifyContent: 'space-between' }}
          pt='32px'
        >
          <Text textAlign='center' color='white'>
            © MarsBound S.L. All rights reserved.
          </Text>
          <Flex direction='column' gap='16px' md={{ flexDirection: 'row' }}>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <Link color='white'>Privacy Policy</Link>
              </Dialog.Trigger>
              <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                  <Dialog.Content
                    background='#1a1a1a'
                    css={{
                      WebkitOverflowScrolling: 'touch',
                    }}
                  >
                    <Dialog.Header>
                      <Dialog.Title color='white'>Privacy Policy</Dialog.Title>
                    </Dialog.Header>
                    <Dialog.Body
                      display='flex'
                      flexDirection='column'
                      gap='16px'
                      color='white'
                    >
                      <Text color='#646E78'>Last updated: 5/28/2025</Text>
                      <Heading>1. Introduction</Heading>
                      Futurity Science ("we," "our," or "us") is committed to
                      protecting your privacy. This Privacy Policy explains how
                      we collect, use, disclose, and safeguard your information
                      when you visit our website and use our services. Please
                      read this Privacy Policy carefully. By accessing or using
                      our website, you acknowledge that you have read,
                      understood, and agree to be bound by all the terms
                      outlined in this policy. If you do not agree with our
                      policies, please do not access or use our website.
                      <Heading>2. Information We Collect</Heading>
                      <Heading>2.1 Personal Data</Heading>
                      We may collect personal information that you voluntarily
                      provide to us when you: Fill out forms on our website
                      Register for an account Subscribe to our newsletter
                      Request information or assistance Participate in surveys
                      or promotions This information may include your name,
                      email address, phone number, company name, job title, and
                      any other information you choose to provide.
                      <Heading>2.2 Automatically Collected Data</Heading>
                      When you visit our website, we may automatically collect
                      certain information about your device, including: IP
                      address Browser type and version Operating system Device
                      information Pages visited and time spent on those pages
                      Referring websites Other browsing statistics
                      <Heading>3. How We Use Your Information</Heading>
                      We may use the information we collect for various
                      purposes, including to: Provide, operate, and maintain our
                      website and services Improve, personalize, and expand our
                      website and services Understand and analyze how you use
                      our website Develop new products, services, features, and
                      functionality Communicate with you for customer service,
                      updates, and marketing purposes Process transactions and
                      send related information Prevent fraudulent transactions,
                      monitor against theft, and protect against criminal
                      activity For compliance with legal obligations
                      <Heading>4. Cookies and Similar Technologies</Heading>
                      We use cookies and similar tracking technologies to track
                      activity on our website and hold certain information.
                      Cookies are files with a small amount of data that may
                      include an anonymous unique identifier. For more detailed
                      information about the cookies we use, please see our
                      Cookie Policy.
                      <Heading>5. Data Sharing and Disclosure</Heading>
                      We may share your information in the following situations:
                      With Service Providers: We may share your information with
                      third-party vendors, service providers, contractors, or
                      agents who perform services for us. Business Transfers: We
                      may share or transfer your information in connection with,
                      or during negotiations of, any merger, sale of company
                      assets, financing, or acquisition. With Your Consent: We
                      may disclose your information for any other purpose with
                      your consent. Legal Requirements: We may disclose your
                      information where required to do so by law or in response
                      to valid legal requests.
                      <Heading>6. Your Rights and Choices</Heading>
                      Depending on your location, you may have certain rights
                      regarding your personal information, including: The right
                      to access personal information we hold about you The right
                      to request correction of inaccurate personal information
                      The right to request deletion of your personal information
                      The right to withdraw consent where processing is based on
                      consent The right to object to processing of your personal
                      information The right to data portability The right to
                      lodge a complaint with a supervisory authority To exercise
                      these rights, please contact us using the information in
                      the "Contact Us" section below.
                      <Heading>7. Data Security</Heading>
                      We have implemented appropriate technical and
                      organizational security measures designed to protect the
                      security of any personal information we process. However,
                      please note that no method of transmission over the
                      Internet or method of electronic storage is 100% secure.
                      <Heading>8. International Data Transfers</Heading>
                      Your information may be transferred to, and maintained on,
                      computers located outside of your state, province,
                      country, or other governmental jurisdiction where the data
                      protection laws may differ from those in your
                      jurisdiction. If you are located outside the United States
                      and choose to provide information to us, please note that
                      we transfer the data to the United States and process it
                      there.
                      <Heading>9. Children's Privacy</Heading>
                      Our website is not intended for children under the age of
                      16. We do not knowingly collect personal information from
                      children under 16. If you are a parent or guardian and
                      believe that your child has provided us with personal
                      information, please contact us so that we can take
                      necessary actions.
                      <Heading>10. Changes to This Privacy Policy</Heading>
                      We may update our Privacy Policy from time to time. We
                      will notify you of any changes by posting the new Privacy
                      Policy on this page and updating the "Last updated" date.
                      You are advised to review this Privacy Policy periodically
                      for any changes.
                      <Heading>11. Contact Us</Heading>
                      If you have any questions or concerns about this Privacy
                      Policy, please contact us at:
                      <Text>Email: fast@futurity.science</Text>
                      <Text>
                        Address: Gran Via de les Corts Catalanes, 774 - 08013
                        Barcelona, Spain
                      </Text>
                    </Dialog.Body>
                    <Dialog.Footer>
                      <Dialog.ActionTrigger asChild>
                        <Button
                          variant='outline'
                          backgroundColor='#1a1a1a'
                          color='white'
                          _hover={{
                            color: '#111111',
                            backgroundColor: '#ffffff',
                          }}
                        >
                          Close
                        </Button>
                      </Dialog.ActionTrigger>
                    </Dialog.Footer>
                    <Dialog.CloseTrigger asChild>
                      <CloseButton
                        size='sm'
                        backgroundColor='#1a1a1a'
                        color='white'
                        _hover={{
                          color: '#111111',
                          backgroundColor: '#ffffff',
                        }}
                      />
                    </Dialog.CloseTrigger>
                  </Dialog.Content>
                </Dialog.Positioner>
              </Portal>
            </Dialog.Root>

            {/* Cookie Policy and Setting not necessary without Google Analytics */}
            {/* <Link>Cookie Policy</Link>
            <Link>Cookie Settings</Link> */}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
