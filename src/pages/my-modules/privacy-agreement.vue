<script setup lang="ts"> 
  defineOptions({
    name: 'PrivacyAgreement'
  }) 
</script>

<template>
  <div safe-area-inset-top p-layout-padding class="follow_box">
    <h2>Sivio – Privacy Policy</h2> 

    <h3>1. Introduction</h3>
    <p>Sivio (“we,” “our,” or “us”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share information when you use our iOS app.</p>

    <h3>2. Information We Collect</h3>
    <ul>
      <li><strong>Account Information:</strong> Name, email, username, profile picture.</li>
      <li><strong>Voice and Video Data:</strong> Recordings and streams when using live chat rooms.</li>
      <li><strong>Usage Information:</strong> Interaction logs, session times, room participation.</li>
      <li><strong>Device Information:</strong> Device type, OS version, IP address, unique device identifiers.</li>
    </ul>

    <h3>3. How We Use Your Information</h3>
    <ul>
      <li>To operate and provide the app services.</li>
      <li>To improve and personalize your experience, including AI features.</li>
      <li>To communicate important updates or promotional information (if you consent).</li>
      <li>For analytics, research, and monitoring usage patterns.</li>
    </ul>

    <h3>4. Sharing Your Information</h3>
    <ul>
      <li>With service providers and partners who perform services on our behalf.</li>
      <li>As required by law or to protect our rights.</li>
      <li>Within Sivio rooms when you interact with other users (e.g., voice/video streaming).</li>
    </ul>

    <h3>5. Your Rights</h3>
    <ul>
      <li>Access, correct, or delete your personal information.</li>
      <li>Manage privacy settings within the app.</li>
      <li>Opt out of promotional communications.</li>
    </ul>

    <h3>6. Children's Privacy</h3>
    <p>Sivio is not intended for children under 13 years old. We do not knowingly collect personal information from children under 13. If we learn that we have collected information from a child under 13, we will delete it promptly.</p>

    <h3>7. Data Security</h3>
    <p>We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>

    <h3>8. International Data Transfer</h3>
    <p>Your data may be transferred to and processed in countries other than your own, including the United States. By using our app, you consent to such transfer and processing.</p>

    <h3>9. Updates to Privacy Policy</h3>
    <p>We may update this Privacy Policy from time to time. The effective date will be updated. Continued use of the app after updates constitutes acceptance of the new terms.</p>

    <h3>10. Contact Us</h3>
    <p>If you have any questions about this Privacy Policy, please contact us at: support@sivioapp.com</p>

    <p>By using Sivio, you acknowledge that you have read, understood, and agree to this Privacy Policy.</p>
  </div>
</template>

<style lang="less" scoped>
  .follow_box {
    color: #fff;
    padding-top: calc(
      var(--van-nav-bar-height) + var(--ai-view-padding-top)
    );
    min-height: 100vh;
    background: var(--ai-follow-bg-color);
  }
</style>
