import { View } from 'react-native';

import TrophySVG from '../../assets/trophy.svg';

import { styles } from './styles';

export function Stars() {
  return (
    <View style={styles.container}>
      <TrophySVG />
    </View>
  )
}
