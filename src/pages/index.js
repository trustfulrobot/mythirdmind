import React from "react";
import { graphql } from "gatsby";

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
	  }
	}
`

function IndexPage({ data }) {


	const source_PatrickMorrissey = data.allFeedPatrickMorrissey.edges.map(function(post, index){
		const sourceID = post.node.id;
		// const sourceTitle = stripTags(post.node.title);
		const sourceTitle = post.node.title;
		const sourceLink = post.node.link;
		// const sourceContent = stripTags(post.node.content.encoded);
		const sourceContent = post.node.content.encoded;
		return (
			<li key={sourceID}>
				{sourceTitle}
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
