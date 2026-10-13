const stories = [
{title:'Scaling agent workloads',description:'Scaled GKE agent workloads from 20 to 200 branches. Asynchronous Python workers, pooled database connections, and KEDA autoscaling helped drain persistent 500+ message backlogs to near-zero.',tags:['Python','GKE','KEDA'],label:'Enterprise rollout',value:'10×',result:'20 → 200 branches'},
{title:'Debugging production incidents',description:'Deployed distributed tracing with OpenTelemetry, Datadog, and LangSmith. Schema-validated JSON runbooks and Claude Code skills supported faster diagnostics during production incidents.',tags:['OpenTelemetry','Datadog','Runbooks'],label:'Reduction in MTTR',value:'~65%',result:'Faster production troubleshooting'},
{title:'Making alerts more useful',description:'Codified Terraform-managed SLOs across 7-day and 30-day windows. Multi-window error-budget alerts and AI summaries replaced noisy static thresholds across Microsoft Teams channels.',tags:['Terraform','SLOs','Error budgets'],label:'Reduction in alert fatigue',value:'~40%',result:'More focus for the engineering team'}
];
let index = 0;
const q = selector => document.querySelector(selector);
function showStory(next) {
 index = (next + stories.length) % stories.length;
 const story = stories[index];
 q('#story-title').replaceChildren();
 story.title.split('\n').forEach((line,i) => {if(i) q('#story-title').append(document.createElement('br'));q('#story-title').append(document.createTextNode(line));});
 q('#story-description').textContent = story.description;
 q('#tags').replaceChildren(...story.tags.map(tag => {const span = document.createElement('span');span.textContent = tag;return span;}));
 q('#chapter').textContent = '0'+(index+1)+' / 03';
 q('#count').textContent = (index+1)+' of 3';
 q('#result-label').textContent = story.label;
 q('#result-value').textContent = story.value;
 q('#result-description').textContent = story.result;
}
q('#prev').addEventListener('click',()=>showStory(index-1));
q('#next').addEventListener('click',()=>showStory(index+1));
q('#motion').addEventListener('click',event=>{
 const paused = document.body.classList.toggle('paused');
 event.currentTarget.setAttribute('aria-pressed',String(paused));
 event.currentTarget.textContent = paused ? 'Play motion ▷' : 'Pause motion Ⅱ';
});
q('#year').textContent = new Date().getFullYear();
