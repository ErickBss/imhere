import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#131016',
		padding: 24,
	},

	eventName: {
		color: '#FFF',
		fontSize: 24,
		fontWeight: 'bold',
		marginTop: 48,
	},

	date: {
		color: '#6b6b6b',
		fontSize: 16,
	},

	form: {
		marginTop: 36,
		marginBottom: 46,
		width: '100%',
		flexDirection: 'row',
	},

	input: {
		flex: 1,
		height: 56,
		backgroundColor: '#1F1E25',
		borderRadius: 5,
		color: '#FFF',
		padding: 16,
		fontSize: 16,
		marginRight: 12,
	},

	button: {
		width: 56,
		height: 56,
		borderRadius: 5,
		backgroundColor: '#31CF67',
		alignItems: 'center',
		justifyContent: 'center',
	},

	buttonText: {
		color: '#FFF',
		fontSize: 24,
	},

	emptyList: {
		color: '#FFF',
		fontSize: 14,
		textAlign: 'center',
	},
});
