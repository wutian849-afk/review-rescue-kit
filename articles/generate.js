const fs = require('fs');
const path = require('path');

const articles = JSON.parse(fs.readFileSync(path.join(__dirname, 'articles-data.json'), 'utf8'));

// Content generators for each article type
const bodies = {
  "how-to-respond-to-bad-google-reviews": `
<p>As a small business owner, nothing is more frustrating than opening Google Reviews and seeing a 1-star review. But here's the truth: how you respond to that review determines whether you lose that customer forever or win them back.</p>

<p>In this guide, you'll learn exactly how to respond to any bad review, with proven templates you can start using today. According to recent studies, businesses that respond to reviews are seen as 3x more trustworthy than those that don't.</p>

<h2>The Golden Rules of Responding to Bad Reviews</h2>

<p>Before we get into specific templates, master these four principles:</p>

<ul>
<li><strong>Respond within 48 hours.</strong> Speed shows you care. Set up notifications so you never miss a review.</li>
<li><strong>Stay professional, never personal.</strong> Your response is public. Potential customers are watching.</li>
<li><strong>Acknowledge, apologize, offer a solution.</strong> This three-step formula works every time.</li>
<li><strong>Always take it offline.</strong> Move the conversation to email or phone as quickly as possible.</li>
</ul>

<h2>Template 1: Responding to a Legitimate Complaint</h2>

<p>When a customer had a genuinely bad experience, own it completely. Start with a sincere apology, acknowledge their specific complaint, and offer meaningful compensation.</p>

<p><em>"Hi [Name], you're absolutely right — [specific issue] took longer than it should have, and I'm sorry. I've already spoken with my team about improving our process. Please email me at [email] so I can make this right personally."</em></p>

<p>This response works because it shows accountability, action, and a willingness to make things right. Customers reading this will think, "Wow, they really care."</p>

<h2>Template 2: Responding to a Fake or Competitor Review</h2>

<p>Fake reviews happen, especially to successful businesses. The key is to respond professionally without accusing anyone publicly.</p>

<p><em>"Hi [Name], I've searched our records and can't find any booking or order under your name. Could you please email [email] with more details so we can investigate? If we can't verify your visit, I'd appreciate it if you'd consider updating your review."</em></p>

<p>This response is polite but firm. It signals to other readers that you take reviews seriously, while giving the reviewer a fair chance to provide details.</p>

<h2>Template 3: Responding to an Angry Customer</h2>

<p>Angry reviews are often emotional outbursts. Don't feed the anger. Respond calmly and professionally.</p>

<p><em>"Hi [Name], I can hear your frustration and I want to help. Please email me at [email] with the specifics of what happened. I'll personally look into this and get back to you within 24 hours."</em></p>

<p>The key here is de-escalation. You acknowledge their emotions without validating unreasonable claims. Other customers will respect your professionalism.</p>

<h2>Template 4: Responding to a Price Complaint</h2>

<p>Price complaints are common in service businesses. Explain your value without being defensive.</p>

<p><em>"Hi [Name], I understand that price is an important consideration. Our pricing reflects the quality of [materials/experience/service] we provide. We also offer [lower-cost option]. If you'd like to discuss this further, please reach out to [email]."</em></p>

<h2>Template 5: Responding When the Issue Was Already Resolved</h2>

<p>Sometimes customers leave reviews before giving you a chance to fix the problem. Used this template when you've already made things right.</p>

<p><em>"Hi [Name], I'm glad we were able to resolve your issue! If everything is satisfactory now, we'd really appreciate it if you could update your review to reflect your current experience."</em></p>

<h2>Platform-Specific Tips</h2>

<p>Each review platform has its own culture. On Google, keep responses professional and solution-oriented. On Yelp, be extra careful — Yelp's algorithm penalizes businesses that ask for reviews. On Amazon, respond quickly to protect your seller rating. On Trustpilot, transparency is key — other businesses read your responses too.</p>

<h2>Common Mistakes to Avoid</h2>

<ul>
<li>Don't argue with customers publicly. You always look worse.</li>
<li>Don't use identical copy-paste responses. Personalize each reply.</li>
<li>Don't blame your employees. Take responsibility as the owner.</li>
<li>Don't ignore fake reviews. Flag them to the platform AND respond professionally.</li>
<li>Don't offer the same solution to every complaint. Tailor your response.</li>
</ul>

<h2>Conclusion</h2>

<p>Responding to bad Google reviews doesn't have to be stressful. With the right templates and approach, every negative review becomes an opportunity to demonstrate your commitment to customer satisfaction.</p>

<p>The most successful business owners don't just respond to bad reviews — they have a system. Proven templates ready to go, so they never write from scratch when emotions are running high.</p>

<div class="cta-box">
<h3>Get 50+ Proven Review Response Templates</h3>
<p>Stop writing responses from scratch. Get our complete kit with templates for every situation.</p>
<a href="https://ko-fi.com/s/56ee265dca" class="btn">Get the Review Rescue Kit →</a>
</div>`,

  "google-review-response-templates": `
<p>Writing a response to a bad Google review from scratch is hard — especially when you're frustrated or stressed. That's why having proven templates ready to go is essential for any small business owner.</p>

<p>In this article, we've compiled 50+ Google review response templates organized by situation. Simply copy, paste, and customize for your business.</p>

<h2>Why Templates Work</h2>

<p>Templates save you time and ensure you never say the wrong thing when emotions are high. According to research, businesses that respond to reviews are perceived as 3x more trustworthy. But a bad response is worse than no response at all. Templates ensure every response is professional, empathetic, and effective.</p>

<h2>Legitimate Complaint Templates</h2>

<p>Use these when the customer's complaint is valid and you need to make things right.</p>

<p><strong>Template 1: Service Was Slow</strong><br>
<em>"Hi [Name], you're right — that wait was unacceptable. I've addressed this with my team and implemented changes. Please email me at [email] so I can make this right personally."</em></p>

<p><strong>Template 2: Product Was Defective</strong><br>
<em>"Hi [Name], I'm truly sorry you received a defective [product]. I've flagged this with our quality team. I'd like to send you a replacement at no cost. Please email [email] with your order number."</em></p>

<p><strong>Template 3: Poor Customer Service</strong><br>
<em>"Hi [Name], I'm genuinely sorry for how you were treated. That's not the experience anyone should have. I've personally addressed this with my team. I'd like to invite you back as my guest — please email [email]."</em></p>

<p><strong>Template 4: Overcharged or Billing Error</strong><br>
<em>"Hi [Name], you're right — there was an error with your billing. I've corrected it and processed a refund. This shouldn't have happened. Please reach out to [email] if you have any other concerns."</em></p>

<p><strong>Template 5: Late Delivery</strong><br>
<em>"Hi [Name], I completely understand your frustration. Your order arrived late and that's not acceptable. I've refunded your shipping and upgraded your next order to express delivery. Please email [email] for confirmation."</em></p>

<h2>Fake Review Templates</h2>

<p>Use these when you suspect the review isn't from a real customer.</p>

<p><strong>Template 6: No Record of Customer</strong><br>
<em>"Hi [Name], I've searched our records and can't find any booking under your name. Could you please email [email] with more details? If we can't verify your visit, I'd appreciate a review update."</em></p>

<p><strong>Template 7: Describes Someone Else's Business</strong><br>
<em>"Hi [Name], the issue you described doesn't match our services. We don't offer [mentioned service]. Could you please email [email] to clarify? There may have been a mix-up."</em></p>

<p><strong>Template 8: Vague Complaint</strong><br>
<em>"Hi [Name], I'd like to understand what went wrong. Your feedback is vague and I want to address your concerns. Please email [email] with specific details about your experience."</em></p>

<h2>Angry Customer Templates</h2>

<p>Use these when the review is emotional or disproportionate. De-escalation is key.</p>

<p><strong>Template 9: Customer Is Venting</strong><br>
<em>"Hi [Name], I can hear your frustration and I want to help. Please email me at [email] with the specifics. I'll personally look into this and get back to you within 24 hours."</em></p>

<p><strong>Template 10: Personal Attack on Staff</strong><br>
<em>"Hi [Name], I take feedback about my team seriously. If you have specific concerns about the service you received, please email [email] so I can investigate appropriately."</em></p>

<h2>Industry-Specific Templates</h2>

<p><strong>For Restaurants:</strong><br>
<em>"Hi [Name], I'm sorry your meal didn't meet expectations. I'd like to invite you back as my guest for a complimentary meal — please email [email]."</em></p>

<p><strong>For Plumbers & HVAC:</strong><br>
<em>"Hi [Name], I'm sorry the repair didn't hold. I'll come back out at no charge to fix the issue. Please call [number] directly and ask for me."</em></p>

<p><strong>For Dentists & Doctors:</strong><br>
<em>"Hi [Name], your comfort is my priority. I'd like to invite you back for a follow-up at no charge so we can address your concerns directly."</em></p>

<p><strong>For Auto Repair:</strong><br>
<em>"Hi [Name], I stand behind my work 100%. Bring it back and I'll re-inspect it at no charge. Your safety is what matters most."</em></p>

<p><strong>For Hair Salons:</strong><br>
<em>"Hi [Name], I'm sorry you weren't happy with your style. Please come back and I'll personally fix it at no charge."</em></p>

<h2>Bonus: Short Templates for Mobile Responses</h2>

<p>When you need to respond quickly from your phone:</p>

<ul>
<li><strong>Legitimate complaint:</strong> "Hi [Name], you're right and I'm sorry. I'm fixing this. Please email [email]."</li>
<li><strong>Fake review:</strong> "Hi [Name], we have no record of your visit. Please email [email] with details."</li>
<li><strong>Already resolved:</strong> "Hi [Name], glad we could resolve this! If everything is good now, we'd appreciate a review update."</li>
<li><strong>General:</strong> "Hi [Name], thanks for the feedback. We're always improving. Please reach out to [email]."</li>
</ul>

<div class="cta-box">
<h3>Get All 50+ Templates Instantly</h3>
<p>Download the complete Review Rescue Kit with templates for every situation.</p>
<a href="https://ko-fi.com/s/56ee265dca" class="btn">Get the Kit →</a>
</div>`
};

// Default body for articles without specific content
const defaultBody = `
<p>In today's digital world, a single review can make or break a small business. Studies show that 94% of consumers say a bad review convinced them to avoid a business, and businesses that actively manage their reviews see significantly higher revenue.</p>

<p>This guide will help you understand the strategies and templates you need to protect your reputation, respond to negative feedback professionally, and build a system that attracts more positive reviews.</p>

<h2>Why Online Reputation Management Matters</h2>

<p>Your online reputation is often the first impression potential customers have of your business. Before they visit your website or call your phone, they check your reviews. Here's what the data says:</p>

<ul>
<li><strong>90% of consumers</strong> read online reviews before visiting a business</li>
<li><strong>94%</strong> say a bad review convinced them to avoid a business</li>
<li><strong>89%</strong> of consumers read business responses to reviews</li>
<li>Businesses that respond to reviews are seen as <strong>3x more trustworthy</strong></li>
<li>A 1-star drop in rating can cost <strong>30-50% of potential customers</strong></li>
</ul>

<h2>The Core Principles of Review Management</h2>

<h3>1. Be Proactive, Not Reactive</h3>
<p>Don't wait for a crisis. Set up a system for monitoring and responding to reviews before you have a problem. This means configuring notifications on Google, Yelp, Amazon, and any other platform where your business is listed.</p>

<h3>2. Respond to Every Review</h3>
<p>Most businesses only respond to bad reviews. This is a mistake. Responding to positive reviews builds loyalty and encourages more customers to leave reviews. Responding to all reviews shows you care about feedback.</p>

<h3>3. Be Consistent in Your Brand Voice</h3>
<p>Your responses should sound like they come from the same person or brand. This builds trust and recognition. Whether you're apologizing for a mistake or thanking a happy customer, your voice should be consistent.</p>

<h3>4. Take Action Behind the Scenes</h3>
<p>Review responses aren't just for the customer who left the review — they're for everyone else reading them. But don't forget to actually fix the underlying issues. Use negative reviews as a source of actionable feedback for improving your business.</p>

<h2>How to Respond to Negative Reviews</h2>

<p>When you receive a negative review, follow this four-step process:</p>

<p><strong>Step 1: Acknowledge</strong> — Show the customer you read and understand their complaint. Use specifics from their review to demonstrate you're listening.</p>

<p><strong>Step 2: Apologize</strong> — A sincere apology goes a long way. Even if you disagree with the complaint, apologize for their experience. "I'm sorry you felt that way" is better than nothing, but "I'm sorry we let you down" is much more effective.</p>

<p><strong>Step 3: Explain Briefly</strong> — A short explanation of what went wrong helps. Don't make excuses. "We were understaffed," or "There was a miscommunication" is honest and acceptable.</p>

<p><strong>Step 4: Offer a Solution</strong> — Always move the conversation offline. Give them an email or phone number to contact you directly. This shows you're serious about making things right.</p>

<h2>How to Get More Positive Reviews</h2>

<p>Getting more 5-star reviews is the best defense against the occasional bad review. Here are proven strategies that work:</p>

<ul>
<li><strong>Ask at the right moment.</strong> The best time to ask for a review is right after a successful service when the customer is happiest.</li>
<li><strong>Make it easy.</strong> Provide a direct link to your Google review page. Every extra click reduces the chance they'll leave a review.</li>
<li><strong>Train your staff.</strong> Every employee should know how to ask for a review naturally. Role-play the conversation.</li>
<li><strong>Use email follow-ups.</strong> Send a follow-up email within 24 hours with a direct review link. This is the most effective method.</li>
<li><strong>Include review links on receipts.</strong> Printed or digital receipts with a QR code to your review page work well.</li>
</ul>

<h2>Platform-Specific Considerations</h2>

<p><strong>Google Reviews:</strong> The most important platform for local businesses. Respond within 48 hours. Google favors businesses that actively engage with reviews.</p>

<p><strong>Yelp:</strong> Yelp's algorithm is strict about review solicitation. Never ask customers for Yelp reviews directly. Instead, focus on providing great service and let reviews come naturally.</p>

<p><strong>Amazon:</strong> As a seller, your feedback score directly impacts your ability to win the Buy Box. Respond to negative feedback within 24 hours.</p>

<p><strong>Trustpilot:</strong> Trustpilot is widely used by service businesses and SaaS companies. Transparency and professionalism are rewarded.</p>

<h2>Conclusion</h2>

<p>Your online reputation is one of your most valuable business assets. With the right system — monitoring, responding, and actively requesting reviews — you can protect and grow your reputation without hiring an expensive agency.</p>

<p>The key is having the right tools and templates ready before you need them. When a bad review hits at 10 PM on a Friday, you don't want to be writing a response from scratch. You want to reach for a proven template, customize it, and respond professionally within minutes.</p>

<div class="cta-box">
<h3>Get the Complete Review Rescue Kit</h3>
<p>50+ proven templates for every review situation. Instant download. Start protecting your reputation today.</p>
<a href="https://ko-fi.com/s/56ee265dca" class="btn">Get the Kit →</a>
</div>`;

// Generate each article
articles.forEach(([slug, title, desc, keywords]) => {
  const bodyContent = bodies[slug] || defaultBody;
  
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${desc}">
    <meta name="keywords" content="${keywords}">
    <link rel="canonical" href="https://wutian849-afk.github.io/review-rescue-kit/articles/${slug}.html">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${desc}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://wutian849-afk.github.io/review-rescue-kit/articles/${slug}.html">
    <script type="application/ld+json">
    {"@context":"https://schema.org","@type":"Article","headline":"${title.replace(/"/g,'\\"')}","description":"${desc.replace(/"/g,'\\"')}","datePublished":"2026-04-30","author":{"@type":"Organization","name":"Review Rescue Kit"}}
    </script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="icon" type="image/svg+xml" href="../favicon.svg">
    <style>
        *{margin:0;padding:0;box-sizing:border-box}
        body{font-family:'Inter',system-ui,sans-serif;font-feature-settings:'cv01','ss03';background:#08090a;color:#f7f8f8;-webkit-font-smoothing:antialiased}
        .container{max-width:720px;margin:0 auto;padding:0 24px}
        nav{position:sticky;top:0;z-index:100;background:rgba(8,9,10,0.85);backdrop-filter:blur(16px);border-bottom:1px solid rgba(255,255,255,0.05)}
        nav .container{display:flex;align-items:center;justify-content:space-between;padding-top:16px;padding-bottom:16px;max-width:1100px}
        .logo{font-size:18px;font-weight:500;color:#f7f8f8;letter-spacing:-0.3px;display:flex;align-items:center;gap:10px;text-decoration:none}
        .logo-icon{width:28px;height:28px;background:linear-gradient(135deg,#7170ff,#5e6ad2);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:12px}
        .nav-cta{background:#5e6ad2;color:#fff;padding:8px 18px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:500}
        .nav-cta:hover{background:#7170ff}
        .article{padding:60px 0 80px}
        .article h1{font-size:36px;font-weight:500;letter-spacing:-0.7px;line-height:1.1;margin-bottom:16px}
        .article .meta{font-size:14px;color:#62666d;margin-bottom:32px}
        .article h2{font-size:24px;font-weight:500;letter-spacing:-0.4px;margin-top:40px;margin-bottom:16px;color:#f7f8f8}
        .article h3{font-size:20px;font-weight:500;margin-top:28px;margin-bottom:12px}
        .article p{font-size:16px;font-weight:400;line-height:1.7;color:#8a8f98;margin-bottom:16px}
        .article ul{margin-bottom:16px;padding-left:20px}
        .article ul li{font-size:16px;font-weight:400;line-height:1.7;color:#8a8f98;margin-bottom:8px}
        .article strong{color:#f7f8f8}
        .cta-box{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:32px;margin:40px 0;text-align:center}
        .cta-box h3{font-size:22px;font-weight:500;margin-bottom:8px;color:#f7f8f8}
        .cta-box p{font-size:15px;color:#8a8f98;margin-bottom:20px}
        .btn{display:inline-block;background:#5e6ad2;color:#fff;padding:12px 28px;border-radius:6px;text-decoration:none;font-size:15px;font-weight:500}
        .btn:hover{background:#7170ff}
        .back-link{display:inline-block;color:#7170ff;text-decoration:none;font-size:14px;font-weight:500;margin-bottom:24px}
        .back-link:hover{text-decoration:underline}
        footer{padding:32px 0;text-align:center;border-top:1px solid rgba(255,255,255,0.05)}
        footer p{font-size:12px;color:#62666d}
        @media(max-width:768px){.article h1{font-size:28px}}
    </style>
</head>
<body>
    <nav><div class="container">
        <a href="../" class="logo"><div class="logo-icon">🛡</div>Review Rescue</a>
        <a href="https://ko-fi.com/s/56ee265dca" class="nav-cta">Get the Kit</a>
    </div></nav>
    <div class="container article">
        <a href="../articles/" class="back-link">← All Articles</a>
        <h1>${title}</h1>
        <p class="meta">Updated April 30, 2026 • <a href="https://ko-fi.com/s/56ee265dca" style="color:#7170ff;text-decoration:none;font-weight:500">Get the Review Rescue Kit →</a></p>
        ${bodyContent}
    </div>
    <footer><div class="container"><p>© 2026 Review Rescue Kit. All rights reserved.</p></div></footer>
</body>
</html>`;

  const filePath = path.join(__dirname, `${slug}.html`);
  fs.writeFileSync(filePath, html);
  console.log(`✅ ${slug}.html (${Math.round(html.length / 1024)}KB)`);
});

console.log(`\n🎉 Generated ${articles.length} articles!`);
