
```
node index.js
```

http://localhost:8080

```
TypeError: Cannot read property 'created' of undefined
    at [object Object].<anonymous> (/Users/lostthetrail/Development/opensource/react-ssr-perf/node_modules/react/lib/ReactDefaultPerf.js:205:16)
    at [object Object].wrapper [as mountComponent] (/Users/lostthetrail/Development/opensource/react-ssr-perf/node_modules/react/lib/ReactPerf.js:64:31)
    at /Users/lostthetrail/Development/opensource/react-ssr-perf/node_modules/react/lib/ReactServerRendering.js:42:38
    at ReactServerRenderingTransaction.Mixin.perform (/Users/lostthetrail/Development/opensource/react-ssr-perf/node_modules/react/lib/Transaction.js:136:20)
    at Object.renderToString (/Users/lostthetrail/Development/opensource/react-ssr-perf/node_modules/react/lib/ReactServerRendering.js:40:24)
    at server.js:12:33
    ...
```
