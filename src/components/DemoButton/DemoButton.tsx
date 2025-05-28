import {
  CloseButton,
  Dialog,
  Field,
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
        <Button>Request a Demo</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content background='#1a1a1a'>
            <Dialog.Header>
              <Dialog.Title fontSize='32px'>
                Request a <Emphasis>Demo</Emphasis>
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
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
                  <Field.Root>
                    <Field.Label>Full Name</Field.Label>
                    <Input name='name' />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Email address</Field.Label>
                    <Input name='email' type='email' />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Role</Field.Label>
                    <Input name='role' />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Company</Field.Label>
                    <Input name='company' />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Message (Optional)</Field.Label>
                    <Textarea placeholder='Type your message here' />
                  </Field.Root>
                </Fieldset.Content>

                <Button type='submit' alignSelf='flex-start'>
                  Submit
                </Button>
              </Fieldset.Root>
            </Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <CloseButton size='sm' />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default DemoButton;
