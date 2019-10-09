
// multiple navigator ref
const multipleNavigator = {
  navigatorRef: {},
  navigatorNamed: {
    // RootStackNavigator: 'RootStackNavigator',
    // TabNavigator: 'TabNavigator',
    // AppStackNavigator: 'AppStackNavigator',
    MyNavigator: 'aaa',
  },
  setNavigator: (name, ref) => {
    multipleNavigator.navigatorRef[name] = ref;
  },
  getNavigator: (name) => {
    return multipleNavigator.navigatorRef[name];
  },
};

export default multipleNavigator;
