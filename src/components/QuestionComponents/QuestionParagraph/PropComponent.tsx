import React, { useEffect } from 'react';
import { Checkbox, Form, Input } from 'antd';
import { QuestionParagraphPropsType } from './interface';

function PropComponent(props: QuestionParagraphPropsType) {
  const { text, isCenter, onChange, disabled } = props;

  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({ text, isCenter });
  }, [text, isCenter, form]);

  function handleValuesChange() {
    if (onChange) {
      onChange(form.getFieldsValue());
    }
  }

  return (
    <Form
      layout="vertical"
      initialValues={{ text, isCenter }}
      disabled={disabled}
      onValuesChange={handleValuesChange}
      form={form}
    >
      <Form.Item
        label="段落内容"
        name="text"
        rules={[
          {
            required: true,
            message: '请输入段落内容',
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item name="isCenter" valuePropName="checked">
        <Checkbox>居中显示</Checkbox>
      </Form.Item>
    </Form>
  );
}

export default PropComponent;