import { create } from '@storybook/theming';
import colors from '../src/assets/themes/colors'

import logo from './img/logo.png'

export default create({
  base: 'light',

  colorPrimary: colors.blue,
  colorSecondary: colors.ultramarine,

  brandTitle: 'LIBRARY UI',
  brandImage: logo,
});