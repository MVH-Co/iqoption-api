// import { provider } from '@app/provider.ts';
// import Instrument from '@/base/objects/instrument.ts';

// !  a verifier
// export function get = (
// 	provider: provider,
// 	country = provider.profile?.current.country_id,
// )  provider.{
// 	name: 'get-leaderboard',
// 	version: '1.0',
// 	body: { type: 'general', instrument_type: 'all', country_id: country },
// });

// export function requestDeals = (provider: provider)
// 	provider.{
// 		name: 'request-leaderboard-deals',
// 		version: '1.0',
// 		body: {
// 			country_id: 0,
// 			user_country_id: provider.profile?.country_id,
// 			from_position: 1,
// 			to_position: 64,
// 			near_traders_country_count: 64,
// 			near_traders_count: 64,
// 			top_country_count: 64,
// 			top_count: 64,
// 			top_type: 2,
// 		},
// 	});

// /**
//  * @param provider
//  * @param instrument
//  * @param country
//  * @returns
//  */
// export function getLeaderboard = (
// 	provider: provider,
// 	instrument: Instrument,
// 	country = provider.profile?.country_id,
// )  provider.{
// 	name: 'get-leaderboard-position',
// 	version: '1.0',
// 	body: {
// 		type: instrument,
// 		country_id: country,
// 	},
// });
