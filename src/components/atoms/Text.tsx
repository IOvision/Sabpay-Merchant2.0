import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import TextStyles from '../../styles/TextStyle';

export interface Props {
    children: React.ReactNode,
    style?: StyleProp<TextStyle>
}

export const HeaderText: React.FC<Props> = ({children, style}) => {
  return <Text style={[TextStyles.headerText, style]}>{children}</Text>;
};

export const BodyText: React.FC<Props> = ({children, style}) => {
  return <Text style={[TextStyles.bodyText, style]}>{children}</Text>;
};

export const CaptionText: React.FC<Props> = ({children, style}) => {
  return <Text style={[TextStyles.captionText, style]}>{children}</Text>;
};

export const OfferText: React.FC<Props> = ({children}) => {
  return <Text style={TextStyles.offerText}>{children}</Text>;
};

HeaderText.defaultProps