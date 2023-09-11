import React from 'react';
import { Radio, Typography, Space } from 'antd';
import { QuestionRadioPropsType, QuestionRadioDefaultProps } from './interface';

const { Paragraph } = Typography;

function Component(props: QuestionRadioPropsType) {
  const {
    title = '',
    options = [],
    isVertical = false,
    value,
  } = { ...QuestionRadioDefaultProps, ...props };

  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Radio.Group value={value}>
        <Space direction={isVertical ? 'vertical' : 'horizontal'}>
          {options.map((opt) => {
            const { text, value: val } = opt;
            return (
              <Radio value={val} key={val}>
                {text}
              </Radio>
            );
          })}
        </Space>
      </Radio.Group>
    </div>
  );
}

export default Component;