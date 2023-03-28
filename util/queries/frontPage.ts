import { gql } from 'graphql-request'

export const FRONT_PAGE_QUERY = gql`
	query FrontPage {
		frontPage(where: {id: "clfr1a4pm4uep0bw7woyr226e"}) {
			aboutMe {
				title
				footer {
					html
				}
				content {
					text
				}
			}
			academic {
				abbr
				daterange
				desc
				title
				displayDateWithMonths
			}
			mainSectionImages {
				url
				mimeType
			}
			projectSection {
				title
				featuredText
				buttonText
				project {
					desc
					date
					image {
						url
					}
					title
					technologies
					github
					content {
						html
					}
				}
			}
			workExperience {
				title
				desc
				daterange
				abbr
				displayDateWithMonths
			}
			skills {
				logos(first: 12) {
					url(transformation: {document: {output: {format: webp}}})
				}
				title
				categories {
					technologies
					name
				}
			}
		}
	}
`