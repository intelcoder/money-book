import { KeyboardAvoidingView, View } from 'react-native'
import { Block, Button, Input, Text } from '@atoms'
import { Controller, useForm } from 'react-hook-form'
import { LabelText } from '@modal/ExpenseForm/styles'

export default function ExpenseForm() {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm()

  function onSubmit(formData) {
    console.log(formData)
  }
  return (
    <KeyboardAvoidingView>
      <Block>
        <LabelText>Date</LabelText>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              underline
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="date"
          rules={{ required: true }}
        />
      </Block>
      <Block>
        <LabelText>Cagegory</LabelText>
        <Input underline />
      </Block>
      <Block>
        <LabelText>Amount</LabelText>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              underline
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              keyboardType="numeric"
            />
          )}
          name="amount"
          rules={{ required: true }}
        />
      </Block>
      <Block>
        <LabelText>Note</LabelText>
        <Input underline />
      </Block>
      <Block>
        <Button bgColor="yellow" roundCorner onPress={handleSubmit(onSubmit)}>
          <Text>Save</Text>
        </Button>
        <Button bgColor="red" roundCorner>
          <Text>Reset</Text>
        </Button>
      </Block>
    </KeyboardAvoidingView>
  )
}
