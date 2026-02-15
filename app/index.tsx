import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: '700', marginBottom: 8 }}>
        FaceMash
      </Text>
      <Text style={{ textAlign: 'center', color: '#666' }}>
        Project scaffold is ready. Start building features in app/.
      </Text>
    </View>
  );
}
