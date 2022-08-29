addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest() {
  
  const domain = "1440308";
  const keyToken = "7a0a8366623f580210fc847c6f69c3b0912b04a2bd39";
  const host = "https://ots.webtrends-optimize.com/ots/api";
  const testAlias = "ta_ServerSideDemo1";
  const url = "https://www.webtrends-optimize.com/";
  const s_mode = "staging";

//   let requrl = `${host}/rest-1.2/control/${domain}-${testAlias}`;
  let requrl = `${host}/rest-1.2/control/${domain}`;

  const settings = {
    method: 'POST',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({
      url,
      keyToken,
      s_mode,
      "_wt.encrypted": "true",
      "debug": "true",
      "_wt.track": "true"
    }),
  };
  const response = await fetch(requrl, settings);
//   console.log(response);

  const results = await response.json();
  return new Response(JSON.stringify(results));
}
