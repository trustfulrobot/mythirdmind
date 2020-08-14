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

function stripTags(content) {
	if ((content===null) || (content===''))
    return false;
  else
	  content = content.toString();
	const tempDOM = document.createElement("div");
	tempDOM.innerHTML = content;
	const strippedContent = tempDOM.textContent || tempDOM.innerText || "";
  return strippedContent;
}

function IndexPage({ data }) {

	console.log(data.allFeedPatrickMorrissey.edges);

	const source_PatrickMorrissey = data.allFeedPatrickMorrissey.edges.map(function(post, index){
		const sourceID = post.node.id;
		const sourceTitle = stripTags(post.node.title);
		const sourceLink = post.node.link;
		const sourceContent = stripTags(post.node.content.encoded);
		return (
			<li key={sourceID}>
				{sourceTitle}
			</li>
		)
	})
	const source_KentuckyTheater = data.allFeedKentuckyTheater.edges.map(function(post, index){
		const sourceID = post.node.id;
		const sourceTitle = stripTags(post.node.title);
		const sourceLink = post.node.link;
		const sourceContent = stripTags(post.node.content.encoded);
		return (
			<li key={sourceID}>
				{sourceContent}
			</li>
		)
	})

	return (
		<div id="MyThirdMind">
			<h1>Here we go</h1>
			<ul>
				{source_PatrickMorrissey}
			</ul>
			<ul>
				{source_KentuckyTheater}
			</ul>
		</div>
	)
}

export default IndexPage
