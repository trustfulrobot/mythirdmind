import React from "react";
import { graphql } from "gatsby";
import { stripTags } from "voca";

export const feedPatrickMorrissey = graphql`
	{
		allFeedPatrickMorrissey {
	    edges {
	      node {
	        content {
	          encoded
	        }
	        id
	        link
	        title
	      }
	    }
	  },

		allFeedKentuckyTheater {
	    edges {
	      node {
	        content {
	          encoded
	        }
	        id
	        link
	        title
	      }
	    }
	  },

		allFeedHighSnobiety {
	    edges {
	      node {
	        content {
	          encoded
	        }
	        id
	        link
	        title
	      }
	    }
	  },

		allFeedBoingBoing {
	    edges {
	      node {
	        content {
	          encoded
	        }
	        id
	        link
	        title
	      }
	    }
	  },

		allFeedAiWeirdness {
	    edges {
	      node {
	        content
	        id
	        link
	        title
	      }
	    }
	  },

		allFeedCreativeApplications {
	    edges {
	      node {
	        content
	        id
	        link
	        title
	      }
	    }
	  },

		allFeedEntagma {
	    edges {
	      node {
	        content
	        id
	        link
	        title
	      }
	    }
	  },

		allFeedPitchfork {
	    edges {
	      node {
	        content
	        id
	        link
	        title
	      }
	    }
	  },

		allFeedArsTechnica {
	    edges {
	      node {
	        content {
	          encoded
	        }
	        id
	        link
	        title
	      }
	    }
	  },

		allFeedTechCrunch {
	    edges {
	      node {
	        content {
	          encoded
	        }
	        id
	        link
	        title
	      }
	    }
	  },

		allFeedCodrops {
	    edges {
	      node {
	        content {
	          encoded
	        }
	        id
	        link
	        title
	      }
	    }
	  },

		allFeedCssTricks {
	    edges {
	      node {
	        content {
	          encoded
	        }
	        id
	        link
	        title
	      }
	    }
	  }
	}
`

function decodeHTML(str) {
	return str.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec);
  });
}

function IndexPage({ data }) {


	const source_PatrickMorrissey = data.allFeedPatrickMorrissey.edges.map(function(post, index){
		const sourceID = post.node.id;
		const sourceTitle = stripTags(post.node.title);
		// const sourceTitle = post.node.title;
		const sourceLink = post.node.link;
		const sourceContent = stripTags(post.node.content.encoded);
		const sourceContentDecoded = decodeHTML(sourceContent);
		// const sourceContent = post.node.content.encoded;
		return (
			<li key={sourceID}>
				{sourceContentDecoded}
			</li>
		)
	});

	return (
		<div id="MyThirdMind">
			<h1>Here we go</h1>
			<ul>
				{source_PatrickMorrissey}
			</ul>
		</div>
	)
}

export default IndexPage
