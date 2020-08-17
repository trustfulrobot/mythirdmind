import React from "react";
import { graphql } from "gatsby";
import { stripTags } from "voca";
import { Chance } from "chance";

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

	const chance = new Chance();
	let sources = [];

	const source_PatrickMorrissey = data.allFeedPatrickMorrissey.edges.map(function(post, index){
		const sourceID = post.node.id;
		const sourceTitle = stripTags(post.node.title);
		const sourceLink = post.node.link;
		const sourceContent = stripTags(post.node.content.encoded);
		const sourceContentDecoded = decodeHTML(sourceContent);
		return {
			id: sourceID,
			source: "Patrick Morrissey",
			title: sourceTitle,
			content: sourceContentDecoded,
			link: sourceLink
		}
	});
	const source_KentuckyTheater = data.allFeedKentuckyTheater.edges.map(function(post, index){
		const sourceID = post.node.id;
		const sourceTitle = stripTags(post.node.title);
		const sourceLink = post.node.link;
		const sourceContent = stripTags(post.node.content.encoded);
		const sourceContentDecoded = decodeHTML(sourceContent);
		return {
			id: sourceID,
			source: "Kentucky Theater",
			title: sourceTitle,
			content: sourceContentDecoded,
			link: sourceLink
		}
	});
	const source_HighSnobiety = data.allFeedHighSnobiety.edges.map(function(post, index){
		const sourceID = post.node.id;
		const sourceTitle = stripTags(post.node.title);
		const sourceLink = post.node.link;
		const sourceContent = stripTags(post.node.content.encoded);
		const sourceContentDecoded = decodeHTML(sourceContent);
		return {
			id: sourceID,
			source: "High Snobiety",
			title: sourceTitle,
			content: sourceContentDecoded,
			link: sourceLink
		}
	});
	const source_BoingBoing = data.allFeedBoingBoing.edges.map(function(post, index){
		const sourceID = post.node.id;
		const sourceTitle = stripTags(post.node.title);
		const sourceLink = post.node.link;
		const sourceContent = stripTags(post.node.content.encoded);
		const sourceContentDecoded = decodeHTML(sourceContent);
		return {
			id: sourceID,
			source: "Boing Boing",
			title: sourceTitle,
			content: sourceContentDecoded,
			link: sourceLink
		}
	});
	const source_AiWeirdness = data.allFeedAiWeirdness.edges.map(function(post, index){
		const sourceID = post.node.id;
		const sourceTitle = stripTags(post.node.title);
		const sourceLink = post.node.link;
		const sourceContent = stripTags(post.node.content);
		const sourceContentDecoded = decodeHTML(sourceContent);
		return {
			id: sourceID,
			source: "AI Weirdness",
			title: sourceTitle,
			content: sourceContentDecoded,
			link: sourceLink
		}
	});
	const source_CreativeApplications = data.allFeedCreativeApplications.edges.map(function(post, index){
		const sourceID = post.node.id;
		const sourceTitle = stripTags(post.node.title);
		const sourceLink = post.node.link;
		const sourceContent = stripTags(post.node.content);
		const sourceContentDecoded = decodeHTML(sourceContent);
		return {
			id: sourceID,
			source: "Creative Applications",
			title: sourceTitle,
			content: sourceContentDecoded,
			link: sourceLink
		}
	});
	const source_Entagma = data.allFeedEntagma.edges.map(function(post, index){
		const sourceID = post.node.id;
		const sourceTitle = stripTags(post.node.title);
		const sourceLink = post.node.link;
		const sourceContent = stripTags(post.node.content);
		const sourceContentDecoded = decodeHTML(sourceContent);
		return {
			id: sourceID,
			source: "Entagma",
			title: sourceTitle,
			content: sourceContentDecoded,
			link: sourceLink
		}
	});
	const source_Pitchfork = data.allFeedPitchfork.edges.map(function(post, index){
		const sourceID = post.node.id;
		const sourceTitle = stripTags(post.node.title);
		const sourceLink = post.node.link;
		const sourceContent = stripTags(post.node.content);
		const sourceContentDecoded = decodeHTML(sourceContent);
		return {
			id: sourceID,
			source: "Pitchfork",
			title: sourceTitle,
			content: sourceContentDecoded,
			link: sourceLink
		}
	});
	const source_ArsTechnica = data.allFeedArsTechnica.edges.map(function(post, index){
		const sourceID = post.node.id;
		const sourceTitle = stripTags(post.node.title);
		const sourceLink = post.node.link;
		const sourceContent = stripTags(post.node.content.encoded);
		const sourceContentDecoded = decodeHTML(sourceContent);
		return {
			id: sourceID,
			source: "Ars Technica",
			title: sourceTitle,
			content: sourceContentDecoded,
			link: sourceLink
		}
	});
	const source_TechCrunch = data.allFeedTechCrunch.edges.map(function(post, index){
		const sourceID = post.node.id;
		const sourceTitle = stripTags(post.node.title);
		const sourceLink = post.node.link;
		const sourceContent = stripTags(post.node.content.encoded);
		const sourceContentDecoded = decodeHTML(sourceContent);
		return {
			id: sourceID,
			source: "Tech Crunch",
			title: sourceTitle,
			content: sourceContentDecoded,
			link: sourceLink
		}
	});
	const source_Codrops = data.allFeedCodrops.edges.map(function(post, index){
		const sourceID = post.node.id;
		const sourceTitle = stripTags(post.node.title);
		const sourceLink = post.node.link;
		const sourceContent = stripTags(post.node.content.encoded);
		const sourceContentDecoded = decodeHTML(sourceContent);
		return {
			id: sourceID,
			source: "Codrops",
			title: sourceTitle,
			content: sourceContentDecoded,
			link: sourceLink
		}
	});
	const source_CSSTricks = data.allFeedCssTricks.edges.map(function(post, index){
		const sourceID = post.node.id;
		const sourceTitle = stripTags(post.node.title);
		const sourceLink = post.node.link;
		const sourceContent = stripTags(post.node.content.encoded);
		const sourceContentDecoded = decodeHTML(sourceContent);
		return {
			id: sourceID,
			source: "CSS Tricks",
			title: sourceTitle,
			content: sourceContentDecoded,
			link: sourceLink
		}
	});

	function addSource(source){
		sources.push(source);
	}
	Array.from(source_PatrickMorrissey).forEach(addSource);
	Array.from(source_KentuckyTheater).forEach(addSource);
	Array.from(source_HighSnobiety).forEach(addSource);
	Array.from(source_BoingBoing).forEach(addSource);
	Array.from(source_AiWeirdness).forEach(addSource);
	Array.from(source_CreativeApplications).forEach(addSource);
	Array.from(source_Entagma).forEach(addSource);
	Array.from(source_Pitchfork).forEach(addSource);
	Array.from(source_ArsTechnica).forEach(addSource);
	Array.from(source_TechCrunch).forEach(addSource);
	Array.from(source_Codrops).forEach(addSource);
	Array.from(source_CSSTricks).forEach(addSource);

	function pickSources(){
		const sourcesLen = sources.length;
		const sourceNum = chance.integer({min: 3, max: 5});
		const sourceIndices = chance.unique(chance.integer, sourceNum, {min: 1, max: sourcesLen});
		return sourceIndices;
	}

	function generateCutups(num){
		let i = 0;
		while (i < num) {
			const sourceIDs = pickSources();
			const sourceNum = sourceIDs.length;
			let cutupSources = [];
			let j = 0;
			while (j < sourceNum) {
				let currentSource = sources[sourceIDs[j]];
				cutupSources.push(currentSource);
				j++;
			}
			i++;
		}
	}
	generateCutups(10);

	return (
		<div id="MyThirdMind">
			<h1>My Third Mind</h1>
			<ul id="cutups"></ul>
		</div>
	)
}

export default IndexPage
