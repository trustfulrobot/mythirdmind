import React from "react";
import { graphql } from "gatsby";
import { stripTags } from "voca";

export const feedPatrickMorrissey = graphql`
	{
		allFeedPatrickMorrissey(limit: 10) {
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

		allFeedKentuckyTheater(limit: 10) {
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

		allFeedHighSnobiety(limit: 10) {
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

		allFeedBoingBoing(limit: 10) {
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

		allFeedAiWeirdness(limit: 10) {
	    edges {
	      node {
	        content
	        id
	        link
	        title
	      }
	    }
	  },

		allFeedCreativeApplications(limit: 10) {
	    edges {
	      node {
	        content
	        id
	        link
	        title
	      }
	    }
	  },

		allFeedEntagma(limit: 10) {
	    edges {
	      node {
	        content
	        id
	        link
	        title
	      }
	    }
	  },

		allFeedPitchfork(limit: 10) {
	    edges {
	      node {
	        content
	        id
	        link
	        title
	      }
	    }
	  },

		allFeedArsTechnica(limit: 10) {
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

		allFeedTechCrunch(limit: 10) {
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

		allFeedCodrops(limit: 10) {
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

		allFeedCssTricks(limit: 10) {
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

	let sources = [];

	const source_PatrickMorrissey = data.allFeedPatrickMorrissey.edges.map(function(post, index){
		const sourceID = post.node.id;
		const sourceTitle = stripTags(post.node.title);
		const sourceLink = post.node.link;
		const sourceContent = stripTags(post.node.content.encoded);
		const sourceContentDecoded = decodeHTML(sourceContent);
		return (
			<li key={sourceID}>
				{sourceContentDecoded}
			</li>
		)
	});

	console.log(data);

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
