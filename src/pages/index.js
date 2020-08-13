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

	const source_PatrickMorrissey = data.allFeedPatrickMorrissey.edges.map(function(post, index){
		return (
			<li key={index}>
				{post.node.title}
			</li>
		)
	})

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
