import {Provider} from 'react-redux';
import NavigationStack from './Screens/NavigatorStack';

import {store} from './Store';

export default function App() {
  return <Provider store={store}>{<NavigationStack />}</Provider>;
}
