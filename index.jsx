import React from "react";

<html>
<body data-rsssl="1" class="post-template-default single single-post postid-43771 single-format-standard post-template post-template-single-feature-longer-php elementor-default elementor-kit-68731">
<div id="main-wrapper">
<a name="top"></a>
<div id="header-wrapper">
<div id="header" class="container">
<div id="logo" class="four columns">
<a href="https://flowingdata.com/">
<img src="https://flowingdata.com/wp-content/themes/fd-modern-5-10/images/logo-v2d.png" />
</a>
</div>
<div id="nav" class="eight columns">
<ul>

<li><a href="https://flowingdata.com/membership/">Membership</a></li>
<li><a href="https://flowingdata.com/category/tutorials/">Tutorials</a></li>
<li><a href="https://flowingdata.com/courses/">Courses</a></li>
<li><a href="https://flowingdata.com/made-by-flowingdata/">Projects</a></li>
<li style="margin-right:0"><a href="https://flowingdata.com/newsletter/">Newsletter</a></li>

</ul>
</div>
<div id="login" class="four columns">
<ul>
<li><a href="https://flowingdata.com/membership/" class="highlight">Become a Member</a></li>
<li>&nbsp;|&nbsp;</li>
<li><a href="https://flowingdata.com/wp-login.php">Log in</a></li>
</ul>
</div>
</div>
</div>
<div id="content-wrapper" class="container">
<div id="single-feature-post" class="archive-post">
<div class="ten columns offset-by-three">
<div class="meta-bar">
<strong><a href="https://flowingdata.com/category/projects/data-underload/" rel="category tag">Data Underload</a></strong> &nbsp;/&nbsp; <a href="https://flowingdata.com/tag/simulation/" rel="tag">simulation</a>, <a href="https://flowingdata.com/tag/time-use/" rel="tag">time use</a> </div>
<h1>A Day in the Life of Americans</h1>
<div class="row"><div id="lead-in">This is how America runs.</div></div>
<div class="author">
By <strong><a href="https://flowingdata.com/about" title="Visit Nathan Yau&#8217;s website" rel="author external">Nathan Yau</a></strong>
</div>
<div class="archive-featured-image extrawide">
<img fetchpriority="high" width="2069" height="1250" src="https://flowingdata.com/wp-content/uploads/2015/12/Time-use-featured-v2.png" class="attachment-full size-full wp-post-image" alt title="A Day in the Life of Americans" decoding="async" srcset="https://flowingdata.com/wp-content/uploads/2015/12/Time-use-featured-v2.png 2069w, https://flowingdata.com/wp-content/uploads/2015/12/Time-use-featured-v2-210x127.png 210w, https://flowingdata.com/wp-content/uploads/2015/12/Time-use-featured-v2-720x435.png 720w, https://flowingdata.com/wp-content/uploads/2015/12/Time-use-featured-v2-768x464.png 768w, https://flowingdata.com/wp-content/uploads/2015/12/Time-use-featured-v2-1090x659.png 1090w" sizes="(max-width: 2069px) 100vw, 2069px" data-attachment-id="43784" data-permalink="https://flowingdata.com/2015/12/15/a-day-in-the-life-of-americans/time-use-featured-v2/" data-orig-file="https://flowingdata.com/wp-content/uploads/2015/12/Time-use-featured-v2.png" data-orig-size="2069,1250" data-comments-opened="0" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="Time use" data-image-description data-image-caption data-medium-file="https://flowingdata.com/wp-content/uploads/2015/12/Time-use-featured-v2-720x435.png" data-large-file="https://flowingdata.com/wp-content/uploads/2015/12/Time-use-featured-v2-1090x659.png" /> </div>
</div>
<div class="entry ten columns offset-by-three">
<p>From <a href="https://flowingdata.com/2015/11/30/most-common-use-of-time-by-age-and-sex/">two</a> <a href="https://flowingdata.com/2015/11/10/counting-the-hours/">angles</a> so far, we&#8217;ve seen how Americans spend their days, but the views are wideout and limited in what you can see. </p>
<p>I can tell you that about 40 percent of people age 25 to 34 are working on an average day at three in the afternoon. I can tell you similar numbers for housework, leisure, travel, and other things. It&#8217;s an overview. </p>
<p>What I really want to see is closer to the individual and a more granular sense of how each person contributes to the patterns. I want to see how a person&#8217;s entire day plays out. (As someone who works from home, I&#8217;m always interested in what&#8217;s on the other side.)</p>
<p>So again I looked at microdata from the American Time Use Survey from 2014, which asked thousands of people what they did during a 24-hour period. I used the data to simulate a single day for 1,000 Americans representative of the population &mdash; to the minute. </p>
<p>More specifically, I tabulated transition probabilities for one activity to the other, such as from work to traveling, for every minute of the day. That provided 1,440 transition matrices, which let me model a day as a time-varying Markov chain. The simulations below come from this model, and it&#8217;s kind of mesmerizing.</p>
<div class="centered" style="margin-bottom:30px">
<div class="extrawideint" style="border-top:1px solid #ccc;border-bottom:1px solid #ccc;padding:20px 0"><iframe src="//flowingdata.com/projects/2015/timeuse-simulation/" height="730" width="1090" scrolling="no" style="border:0;height:730px;"></iframe></div>
</div>
<p>Each dot represents a person, color represents the activity, and time of day is shown in the top left. As someone changes an activity, say from sleep to a morning commute, the dot moves accordingly.</p>
<p>Following the timeline of the ATUS, the simulation starts at 4:00am and runs through 24 hours. The day starts with little movement as people are asleep and won&#8217;t wake up for a few hours. For most, the day starts at 7:00am and then it&#8217;s off to the races (which is especially fun to see on the fast speed).</p>
<p>You see people head to work, run errands, do housework, take care of the kids, commute, relax, and eat at almost designated times during the day. I stared at these dots longer than I care to admit.</p>
<p>Although with all 1,000 dots floating around it can be a challenge to keep track of where all those people went. </p>
<p>So I drew lines to show the paths. </p>
<p>In the graphics that follow, colors represent paths ending in that activity. Traveling is not included to make activity changes more obvious.<br/>
&nbsp;</p>
<h3>Waking up</h3>
<p>Between 6:30am and 7:30am, most people wake up, head into personal care such as showering and brushing teeth, and then head to work, eat breakfast, relax for a bit, and do housework.</p>
<p><img decoding="async" data-attachment-id="43783" data-permalink="https://flowingdata.com/2015/12/15/a-day-in-the-life-of-americans/1-morning/" data-orig-file="https://flowingdata.com/wp-content/uploads/2015/12/1-morning.png" data-orig-size="1440,1360" data-comments-opened="0" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="Morning" data-image-description data-image-caption data-medium-file="https://flowingdata.com/wp-content/uploads/2015/12/1-morning-720x680.png" data-large-file="https://flowingdata.com/wp-content/uploads/2015/12/1-morning-1090x1029.png" src="https://flowingdata.com/wp-content/uploads/2015/12/1-morning.png" alt="Morning" width="1440" height="1360" class="alignnone size-full wp-image-43783" srcset="https://flowingdata.com/wp-content/uploads/2015/12/1-morning.png 1440w, https://flowingdata.com/wp-content/uploads/2015/12/1-morning-210x198.png 210w, https://flowingdata.com/wp-content/uploads/2015/12/1-morning-720x680.png 720w, https://flowingdata.com/wp-content/uploads/2015/12/1-morning-768x725.png 768w, https://flowingdata.com/wp-content/uploads/2015/12/1-morning-1090x1029.png 1090w" sizes="(max-width: 1440px) 100vw, 1440px" /><br/>
&nbsp;</p>
<h3>Lunch hour</h3>
<p>From noon to 1:00pm, you see a lot of movement from work or housework to eating and drinking and then back again. Many also take the time to relax.</p>
<p><img decoding="async" data-attachment-id="43781" data-permalink="https://flowingdata.com/2015/12/15/a-day-in-the-life-of-americans/3-lunch-hour/" data-orig-file="https://flowingdata.com/wp-content/uploads/2015/12/3-lunch-hour.png" data-orig-size="1456,1365" data-comments-opened="0" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="Lunch hour" data-image-description data-image-caption data-medium-file="https://flowingdata.com/wp-content/uploads/2015/12/3-lunch-hour-720x675.png" data-large-file="https://flowingdata.com/wp-content/uploads/2015/12/3-lunch-hour-1090x1022.png" src="https://flowingdata.com/wp-content/uploads/2015/12/3-lunch-hour.png" alt="Lunch hour" width="1456" height="1365" class="alignnone size-full wp-image-43781" srcset="https://flowingdata.com/wp-content/uploads/2015/12/3-lunch-hour.png 1456w, https://flowingdata.com/wp-content/uploads/2015/12/3-lunch-hour-210x197.png 210w, https://flowingdata.com/wp-content/uploads/2015/12/3-lunch-hour-720x675.png 720w, https://flowingdata.com/wp-content/uploads/2015/12/3-lunch-hour-768x720.png 768w, https://flowingdata.com/wp-content/uploads/2015/12/3-lunch-hour-1090x1022.png 1090w" sizes="(max-width: 1456px) 100vw, 1456px" /><br/>
&nbsp;</p>
<h3>Getting off work</h3>
<p>As you might expect, once the clock strikes 5:00pm, people head home to prepare and/or eat dinner.</p>
<p><img loading="lazy" decoding="async" data-attachment-id="43780" data-permalink="https://flowingdata.com/2015/12/15/a-day-in-the-life-of-americans/4-work-done/" data-orig-file="https://flowingdata.com/wp-content/uploads/2015/12/4-work-done.png" data-orig-size="1462,1392" data-comments-opened="0" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="Work done" data-image-description data-image-caption data-medium-file="https://flowingdata.com/wp-content/uploads/2015/12/4-work-done-720x686.png" data-large-file="https://flowingdata.com/wp-content/uploads/2015/12/4-work-done-1090x1038.png" src="https://flowingdata.com/wp-content/uploads/2015/12/4-work-done.png" alt="Work done" width="1462" height="1392" class="alignnone size-full wp-image-43780" srcset="https://flowingdata.com/wp-content/uploads/2015/12/4-work-done.png 1462w, https://flowingdata.com/wp-content/uploads/2015/12/4-work-done-210x200.png 210w, https://flowingdata.com/wp-content/uploads/2015/12/4-work-done-720x686.png 720w, https://flowingdata.com/wp-content/uploads/2015/12/4-work-done-768x731.png 768w, https://flowingdata.com/wp-content/uploads/2015/12/4-work-done-1090x1038.png 1090w" sizes="(max-width: 1462px) 100vw, 1462px" /><br/>
&nbsp;</p>
<h3>Winding down</h3>
<p>Between 10:00pm and midnight, people wind down for the day, shifting from leisure to personal care and eventually going to sleep.</p>
<p><img loading="lazy" decoding="async" data-attachment-id="43779" data-permalink="https://flowingdata.com/2015/12/15/a-day-in-the-life-of-americans/5-winding-down/" data-orig-file="https://flowingdata.com/wp-content/uploads/2015/12/5-winding-down.png" data-orig-size="1448,1378" data-comments-opened="0" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="Winding down" data-image-description data-image-caption data-medium-file="https://flowingdata.com/wp-content/uploads/2015/12/5-winding-down-720x685.png" data-large-file="https://flowingdata.com/wp-content/uploads/2015/12/5-winding-down-1090x1037.png" src="https://flowingdata.com/wp-content/uploads/2015/12/5-winding-down.png" alt="Winding down" width="1448" height="1378" class="alignnone size-full wp-image-43779" srcset="https://flowingdata.com/wp-content/uploads/2015/12/5-winding-down.png 1448w, https://flowingdata.com/wp-content/uploads/2015/12/5-winding-down-210x200.png 210w, https://flowingdata.com/wp-content/uploads/2015/12/5-winding-down-720x685.png 720w, https://flowingdata.com/wp-content/uploads/2015/12/5-winding-down-768x731.png 768w, https://flowingdata.com/wp-content/uploads/2015/12/5-winding-down-1090x1037.png 1090w" sizes="(max-width: 1448px) 100vw, 1448px" /><br/>
&nbsp;<br/>
&nbsp;</p>
<div class="section-break"></div>
<h4><a href="https://flowingdata.com/2017/05/17/american-workday/"><img loading="lazy" decoding="async" data-attachment-id="48690" data-permalink="https://flowingdata.com/2017/05/17/american-workday/time-for-work/" data-orig-file="https://flowingdata.com/wp-content/uploads/2017/05/Time-for-Work.png" data-orig-size="1360,766" data-comments-opened="0" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="Time for Work" data-image-description data-image-caption data-medium-file="https://flowingdata.com/wp-content/uploads/2017/05/Time-for-Work-720x406.png" data-large-file="https://flowingdata.com/wp-content/uploads/2017/05/Time-for-Work-1090x614.png" src="https://flowingdata.com/wp-content/uploads/2017/05/Time-for-Work-210x118.png" alt width="210" height="118" class="alignleft size-thumbnail wp-image-48690" srcset="https://flowingdata.com/wp-content/uploads/2017/05/Time-for-Work-210x118.png 210w, https://flowingdata.com/wp-content/uploads/2017/05/Time-for-Work-720x406.png 720w, https://flowingdata.com/wp-content/uploads/2017/05/Time-for-Work-768x433.png 768w, https://flowingdata.com/wp-content/uploads/2017/05/Time-for-Work-1090x614.png 1090w, https://flowingdata.com/wp-content/uploads/2017/05/Time-for-Work.png 1360w" sizes="(max-width: 210px) 100vw, 210px" /></a>This is an American Workday, By Occupation</h4>
<p><a href="https://flowingdata.com/2017/05/17/american-workday/">When and where people work</a>, a simulation.</p>
<div class="clr"></div>
<h4><a href="https://flowingdata.com/2015/11/30/most-common-use-of-time-by-age-and-sex/"><img loading="lazy" decoding="async" data-attachment-id="43614" data-permalink="https://flowingdata.com/2015/11/30/most-common-use-of-time-by-age-and-sex/time-use-demographic/" data-orig-file="https://flowingdata.com/wp-content/uploads/2015/11/Time-Use-Demographic.png" data-orig-size="1494,700" data-comments-opened="0" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="Time Use Demographic" data-image-description data-image-caption data-medium-file="https://flowingdata.com/wp-content/uploads/2015/11/Time-Use-Demographic-720x337.png" data-large-file="https://flowingdata.com/wp-content/uploads/2015/11/Time-Use-Demographic-1090x511.png" src="https://flowingdata.com/wp-content/uploads/2015/11/Time-Use-Demographic-210x98.png" alt="Time Use Demographic" width="210" height="98" class="alignleft size-thumbnail wp-image-43614" srcset="https://flowingdata.com/wp-content/uploads/2015/11/Time-Use-Demographic-210x98.png 210w, https://flowingdata.com/wp-content/uploads/2015/11/Time-Use-Demographic-720x337.png 720w, https://flowingdata.com/wp-content/uploads/2015/11/Time-Use-Demographic-1090x511.png 1090w, https://flowingdata.com/wp-content/uploads/2015/11/Time-Use-Demographic.png 1494w" sizes="(max-width: 210px) 100vw, 210px" /></a>Most Common Activities</h4>
<p>See the <a href="https://flowingdata.com/2015/11/30/most-common-use-of-time-by-age-and-sex/">half-hour breakdowns</a> for a day, by sex and age group.</p>
<div class="clr"></div>
<h4><a href="https://flowingdata.com/2016/08/23/make-a-moving-bubbles-chart-to-show-clustering-and-distributions/"><img loading="lazy" decoding="async" data-attachment-id="46041" data-permalink="https://flowingdata.com/2016/08/23/make-a-moving-bubbles-chart-to-show-clustering-and-distributions/floaty-bubbles-featured/" data-orig-file="https://flowingdata.com/wp-content/uploads/2016/08/floaty-bubbles-featured.gif" data-orig-size="900,561" data-comments-opened="0" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="Moving Bubbles" data-image-description data-image-caption data-medium-file="https://flowingdata.com/wp-content/uploads/2016/08/floaty-bubbles-featured-720x449.gif" data-large-file="https://flowingdata.com/wp-content/uploads/2016/08/floaty-bubbles-featured.gif" src="https://flowingdata.com/wp-content/uploads/2016/08/floaty-bubbles-featured-210x131.gif" alt width="210" height="131" class="alignleft size-thumbnail wp-image-46041" srcset="https://flowingdata.com/wp-content/uploads/2016/08/floaty-bubbles-featured-210x131.gif 210w, https://flowingdata.com/wp-content/uploads/2016/08/floaty-bubbles-featured-720x449.gif 720w, https://flowingdata.com/wp-content/uploads/2016/08/floaty-bubbles-featured-768x479.gif 768w, https://flowingdata.com/wp-content/uploads/2016/08/floaty-bubbles-featured-400x250.gif 400w" sizes="(max-width: 210px) 100vw, 210px" /></a>Make a Moving Bubbles Chart to Show Clustering and Distributions</h4>
<p>Here&#8217;s how to <a href="https://flowingdata.com/2016/08/23/make-a-moving-bubbles-chart-to-show-clustering-and-distributions/">make a chart similar to this one</a>.</p>
<div class="clr"></div>
<p>&nbsp;</p>
</div>
<div class="clr"></div>
<div class="ten columns offset-by-three">
<div id="join-now" class="ten columns alpha omega" style="margin-top:0">
<div style="padding:0 1.5em; text-align: left;">
<p><strong><span>Become a member.</span></strong> Support an independent site. Make great charts.</p>
<a href="https://flowingdata.com/membership/" class="action-button annual">See What You Get</a>
<p style="margin-top:1em;">My work on FlowingData is supported by <a href="https://flowingdata.com/membership/">paid memberships</a>. Since 2007, I have been analyzing data and making charts to help people understand and appreciate data in their work and everyday lives. I hope to keep it going for many more years.</p>
<p style="margin-bottom:0">If you liked this (or want to learn how to make similar data things), please consider supporting this small corner of the internet with a membership. You get unlimited access to visualization courses, tutorials, and extra resources. Thanks. &mdash; <em>Nathan</em></p>
</div>
</div>
</div>
<div class="clr"></div>
<div class="ten columns offset-by-three" style="margin-bottom:1rem">
<div class="yarpp yarpp-related yarpp-related-website yarpp-template-yarpp-template-list">
<div id="related">
<h3 class="toplevel">Related</h3>
<ul>
<li>
<a href="https://flowingdata.com/2021/08/25/cycle-of-many/" rel="bookmark" title="Cycle of Many, a 24-hour snapshot for a day in the life of Americans">
Cycle of Many, a 24-hour snapshot for a day in the life of Americans</a>

</li>
<li>
<a href="https://flowingdata.com/2021/11/23/most-common-daily-schedules-for-different-groups/" rel="bookmark" title="Most Common Daily Routines">
Most Common Daily Routines</a>

</li>
<li>
<a href="https://flowingdata.com/2019/03/06/women-men-timeuse/" rel="bookmark" title="A Day in the Life: Women and Men">
A Day in the Life: Women and Men</a>

</li>
</ul>
<div class="clear-line"></div>
</div>
</div>
<div class="charttypes"><h3 class="toplevel">Chart Types Used</h3><a href="https://flowingdata.com/charttype/moving-bubbles/"><img src="https://flowingdata.com/wp-content/themes/fd-modern-5-10/images/chart-types/moving-bubbles-thumb.png" alt="Moving Bubbles" title="Moving Bubbles" class="thumbnail" /></a><a href="https://flowingdata.com/charttype/network-graph/"><img src="https://flowingdata.com/wp-content/themes/fd-modern-5-10/images/chart-types/network-graph-thumb.png" alt="Network Graph" title="Network Graph" class="thumbnail" /></a></div>

<span id="comments"></span>

</div>
<div class="clr"></div>
</div>
<div class="clr"></div>
</div>
<div id="footer-wrapper">
<div id="footer" class="container">
<ul id="final-links">
<li><a href="https://flowingdata.com/about">About</a></li>
<li><a href="https://flowingdata.com/contact">Contact</a></li>
<li><a href="https://twitter.com/flowingdata" target="_blank">Twitter</a></li>
<li><a href="https://flowingdata.com/newsletter/">Newsletter</a></li>
<li><a href="https://flowingdata.com/feed" target="_blank">RSS</a></li>
</ul>
<div id="bottom">Copyright &copy; 2007-Present FlowingData. All rights reserved.</div>
<div id="bottom-logo"><a href="https://flowingdata.com"><img src="https://flowingdata.com/wp-content/themes/fd-modern-5-10/images/logo-lone-v2d.png" /></a></div>
</div>
</div>
<div id="jp-carousel-loading-overlay">
<div id="jp-carousel-loading-wrapper">
<span id="jp-carousel-library-loading">&nbsp;</span>
</div>
</div>
<div class="jp-carousel-overlay" style="display: none;">
<div class="jp-carousel-container">

<div class="jp-carousel-wrap swiper-container jp-carousel-swiper-container jp-carousel-transitions" itemscope itemtype="https://schema.org/ImageGallery">
<div class="jp-carousel swiper-wrapper"></div>
<div class="jp-swiper-button-prev swiper-button-prev">
<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="maskPrev" mask-type="alpha" maskUnits="userSpaceOnUse" x="8" y="6" width="9" height="12">
<path d="M16.2072 16.59L11.6496 12L16.2072 7.41L14.8041 6L8.8335 12L14.8041 18L16.2072 16.59Z" fill="white" />
</mask>
<g mask="url(#maskPrev)">
<rect x="0.579102" width="23.8823" height="24" fill="#FFFFFF" />
</g>
</svg>
</div>
<div class="jp-swiper-button-next swiper-button-next">
<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="maskNext" mask-type="alpha" maskUnits="userSpaceOnUse" x="8" y="6" width="8" height="12">
<path d="M8.59814 16.59L13.1557 12L8.59814 7.41L10.0012 6L15.9718 12L10.0012 18L8.59814 16.59Z" fill="white" />
</mask>
<g mask="url(#maskNext)">
<rect x="0.34375" width="23.8822" height="24" fill="#FFFFFF" />
</g>
</svg>
</div>
</div>

<div class="jp-carousel-close-hint">
<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="maskClose" mask-type="alpha" maskUnits="userSpaceOnUse" x="5" y="5" width="15" height="14">
<path d="M19.3166 6.41L17.9135 5L12.3509 10.59L6.78834 5L5.38525 6.41L10.9478 12L5.38525 17.59L6.78834 19L12.3509 13.41L17.9135 19L19.3166 17.59L13.754 12L19.3166 6.41Z" fill="white" />
</mask>
<g mask="url(#maskClose)">
<rect x="0.409668" width="23.8823" height="24" fill="#FFFFFF" />
</g>
</svg>
</div>

<div class="jp-carousel-info">
<div class="jp-carousel-info-footer">
<div class="jp-carousel-pagination-container">
<div class="jp-swiper-pagination swiper-pagination"></div>
<div class="jp-carousel-pagination"></div>
</div>
<div class="jp-carousel-photo-title-container">
<h2 class="jp-carousel-photo-caption"></h2>
</div>
<div class="jp-carousel-photo-icons-container">
<a href="#" class="jp-carousel-icon-btn jp-carousel-icon-info" aria-label="Toggle photo metadata visibility">
<span class="jp-carousel-icon">
<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="maskInfo" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="21" height="20">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.7537 2C7.26076 2 2.80273 6.48 2.80273 12C2.80273 17.52 7.26076 22 12.7537 22C18.2466 22 22.7046 17.52 22.7046 12C22.7046 6.48 18.2466 2 12.7537 2ZM11.7586 7V9H13.7488V7H11.7586ZM11.7586 11V17H13.7488V11H11.7586ZM4.79292 12C4.79292 16.41 8.36531 20 12.7537 20C17.142 20 20.7144 16.41 20.7144 12C20.7144 7.59 17.142 4 12.7537 4C8.36531 4 4.79292 7.59 4.79292 12Z" fill="white" />
</mask>
<g mask="url(#maskInfo)">
<rect x="0.8125" width="23.8823" height="24" fill="#FFFFFF" />
</g>
</svg>
</span>
</a>
</div>
</div>
<div class="jp-carousel-info-extra">
<div class="jp-carousel-info-content-wrapper">
<div class="jp-carousel-photo-title-container">
<h2 class="jp-carousel-photo-title"></h2>
</div>
<div class="jp-carousel-comments-wrapper">
</div>
<div class="jp-carousel-image-meta">
<div class="jp-carousel-title-and-caption">
<div class="jp-carousel-photo-info">
<h3 class="jp-carousel-caption" itemprop="caption description"></h3>
</div>
<div class="jp-carousel-photo-description"></div>
</div>
<ul class="jp-carousel-image-exif" style="display: none;"></ul>
<a class="jp-carousel-image-download" href="#" target="_blank" style="display: none;">
<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="19" height="18">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.84615 5V19H19.7775V12H21.7677V19C21.7677 20.1 20.8721 21 19.7775 21H5.84615C4.74159 21 3.85596 20.1 3.85596 19V5C3.85596 3.9 4.74159 3 5.84615 3H12.8118V5H5.84615ZM14.802 5V3H21.7677V10H19.7775V6.41L9.99569 16.24L8.59261 14.83L18.3744 5H14.802Z" fill="white" />
</mask>
<g mask="url(#mask0)">
<rect x="0.870605" width="23.8823" height="24" fill="#FFFFFF" />
</g>
</svg>
<span class="jp-carousel-download-text"></span>
</a>
<div class="jp-carousel-image-map" style="display: none;"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<link rel="stylesheet" id="yarppRelatedCss-css" href="https://flowingdata.com/wp-content/plugins/yet-another-related-posts-plugin/style/related.css?ver=5.30.9" type="text/css" media="all" />
<script type="text/javascript" src="https://flowingdata.com/wp-includes/js/comment-reply.min.js?ver=6.4.2" id="comment-reply-js" async="async" data-wp-strategy="async"></script>
<script type="text/javascript" src="https://flowingdata.com/wp-content/plugins/advanced-responsive-video-embedder/build/main.js?ver=b087dd41bba279baeb77" id="arve-main-js"></script>
<script type="text/javascript" id="learndash-front-js-extra">
</script>
<script type="text/javascript" src="//flowingdata.com/wp-content/plugins/sfwd-lms/themes/ld30/assets/js/learndash.js?ver=4.10.2" id="learndash-front-js"></script>
<script defer type="text/javascript" src="https://stats.wp.com/e-202403.js" id="jetpack-stats-js"></script>
<script type="text/javascript" id="jetpack-stats-js-after">
</script>
<script type="text/javascript" src="https://flowingdata.com/wp-content/plugins/jetpack/_inc/build/carousel/jetpack-carousel.min.js?ver=13.0" id="jetpack-carousel-js"></script>
</div>
</body>
</html>