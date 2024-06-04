import { useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import MainButton from '../shared/button/main-button';
import CheckboxGroup from '../shared/form-fields/checkbox-group';
import InputField from '../shared/form-fields/input';
import RadioGroup from '../shared/form-fields/radio-group';
import SelectField from '../shared/form-fields/select';

const schema = yup.object({
  email: yup.string().email().required('Vui lòng nhập email'),
  location: yup.string().required('Vui lòng chọn địa chỉ'),
  gender: yup.string(),
  skill: yup.array().min(1, 'Vui lòng chọn ít nhất một kỹ năng').required('Vui lòng chọn ít nhất một kỹ năng'),
});

const Form = () => {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: 'duc@gm.com',
      location: 'hcm',
      gender: 'male',
      skill: ['reactjs'],
    },
  });

  const formValues = useWatch({ control });
  console.log('>>> formValues: ', formValues);

  const onSubmit = (data: yup.Asserts<typeof schema>) => {
    console.log('>>> data submitted: ', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <InputField label="Email" name="email" placeholder="Enter your email" control={control} />
        <SelectField
          control={control}
          label="Location"
          name="location"
          placeholder="Select Location"
          options={[
            { label: 'Ha Noi', value: 'hanoi' },
            { label: 'TP HCM', value: 'hcm' },
            { label: 'Da Nang', value: 'danang' },
          ]}
        />
      </div>
      <RadioGroup
        control={control}
        label="Gender"
        name="gender"
        options={[
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
          { label: 'Other', value: 'other' },
        ]}
      />
      <CheckboxGroup
        control={control}
        label="Skill"
        name="skill"
        options={[
          { label: 'ReactJS', value: 'reactjs' },
          { label: 'NextJS', value: 'nextjs' },
          { label: 'Tailwind', value: 'tailwind' },
        ]}
      />
      <MainButton title="Submit" />
    </form>
  );
};

export default Form;
