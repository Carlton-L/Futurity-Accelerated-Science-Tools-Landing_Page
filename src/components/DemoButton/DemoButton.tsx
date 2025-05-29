import {
  Badge,
  Checkbox,
  CloseButton,
  Dialog,
  Field,
  FieldRequiredIndicator,
  Fieldset,
  Input,
  Portal,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import Button from '../Button';
import Emphasis from '../Emphasis';

const DemoButton = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button backgroundColor='#1a1a1a'>Request a Demo</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content background='#1a1a1a'>
            <Dialog.Header>
              <Dialog.Title color='white' fontSize='32px'>
                Request a <Emphasis>Demo</Emphasis>
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <form
                action='https://formsubmit.co/m@futurity.systems'
                method='POST'
              >
                <Fieldset.Root size='lg' maxW='md'>
                  <Stack>
                    <Fieldset.Legend color='white'>
                      Contact details
                    </Fieldset.Legend>
                    <Fieldset.HelperText color='#646E78'>
                      Please provide your contact details below.
                    </Fieldset.HelperText>
                  </Stack>

                  <Fieldset.Content color='white'>
                    <Field.Root required>
                      <Field.Label>
                        Full Name
                        <Field.RequiredIndicator />
                      </Field.Label>
                      <Input name='name' />
                    </Field.Root>

                    <Field.Root required>
                      <Field.Label>
                        Email address
                        <Field.RequiredIndicator />
                      </Field.Label>
                      <Input name='email' type='email' />
                    </Field.Root>

                    <Field.Root>
                      <Field.Label>
                        Role
                        <Field.RequiredIndicator
                          fallback={
                            <Badge
                              size='xs'
                              variant='outline'
                              background='#1a1a1a'
                              color='#A7ACB2'
                              boxShadow='inset 0 0 0px 1px #333333'
                            >
                              Optional
                            </Badge>
                          }
                        />
                      </Field.Label>
                      <Input name='role' />
                    </Field.Root>

                    <Field.Root required>
                      <Field.Label>
                        Company
                        <Field.RequiredIndicator />
                      </Field.Label>
                      <Input name='company' />
                    </Field.Root>

                    <Field.Root>
                      <Field.Label>
                        Message
                        <Field.RequiredIndicator
                          fallback={
                            <Badge
                              size='xs'
                              variant='outline'
                              background='#1a1a1a'
                              color='#A7ACB2'
                              boxShadow='inset 0 0 0px 1px #333333'
                            >
                              Optional
                            </Badge>
                          }
                        />
                      </Field.Label>
                      <Textarea placeholder='Type your message here' />
                    </Field.Root>

                    <Field.Root required>
                      <Checkbox.Root>
                        <Checkbox.HiddenInput />
                        <Checkbox.Control />
                        <Checkbox.Label>
                          I consent to Futurity contacting me about this demo
                          request <FieldRequiredIndicator />
                        </Checkbox.Label>
                      </Checkbox.Root>
                    </Field.Root>
                  </Fieldset.Content>

                  <Button
                    type='submit'
                    alignSelf='flex-start'
                    backgroundColor='#1a1a1a'
                  >
                    Submit
                  </Button>
                </Fieldset.Root>
              </form>
            </Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <CloseButton
                size='sm'
                color='white'
                // borderColor='white'

                backgroundColor='#1a1a1a'
                _hover={{ color: '#111111', backgroundColor: '#ffffff' }}
              />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default DemoButton;
