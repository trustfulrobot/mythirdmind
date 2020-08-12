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
	  }
	}
`

function IndexPage({ data }) {

	// const source_PatrickMorrissey = "test";
	console.log(data.allFeedPatrickMorrissey.edges);

	const source_PatrickMorrissey = data.allFeedPatrickMorrissey.edges.map(function(post, index){
		return (
			<li key={index}>
				{post.node.title}
			</li>
		)
	})


	// const source_PatrickMorrissey = "test";

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
