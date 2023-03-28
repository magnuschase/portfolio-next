import { gql } from 'graphql-request'

export const CONTACT_PAGE_QUERY = gql`
	query ContactPage {
		contactPage(where: {id: "clfr0vume4ufb0bw8hzs7adhl"}) {
			links {
				url
				label
			}
			email {
				label
				placeholder
			}
			message {
				label
				placeholder
			}
			name {
				label
				placeholder
			}
			phone {
				label
				placeholder
			}
		}
	}
`