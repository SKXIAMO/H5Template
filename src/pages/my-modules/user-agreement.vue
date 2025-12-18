<script setup lang="ts">
  defineOptions({
    name: 'UserAgreement'
  })
</script>

<template>
  <div safe-area-inset-top p-layout-padding class="follow_box">
    <h2>Sivio – Terms of Service</h2> 

    <h3>1. Acceptance of Terms</h3>
    <p>By using Sivio, a voice-first social platform for live singing and chat, you agree to these Terms of Service (“Terms”). If you do not agree, do not use the platform.</p>

    <h3>2. Service Description</h3>
    <p>Sivio allows users to create or join live singing chat rooms, interact via voice and video, and use AI-assisted features. Services may include:</p>
    <ul>
      <li>Hosting or joining rooms</li>
      <li>Live audio/video streaming</li>
      <li>AI chat companion interactions</li>
      <li>In-app purchases or subscriptions</li>
    </ul>

    <h3>3. Account Registration</h3>
    <ul>
      <li>Users must provide accurate and complete information.</li>
      <li>Users must be at least 13 years old; certain features may have a higher age requirement.</li>
      <li>You are responsible for keeping your account credentials secure.</li>
    </ul>

    <h3>4. User Conduct</h3>
    <p>You agree not to:</p>
    <ul>
      <li>Upload or share illegal, harmful, hateful, or sexually explicit content.</li>
      <li>Harass, threaten, or intimidate other users.</li>
      <li>Violate intellectual property rights or laws.</li>
      <li>Exploit the service for unauthorized commercial purposes.</li>
    </ul>

    <h3>5. Paid Services</h3>
    <ul>
      <li>Certain features or content may require payment.</li>
      <li>All payments are non-refundable unless required by law.</li>
      <li>Sivio reserves the right to modify subscription fees and services.</li>
    </ul>

    <h3>6. Intellectual Property</h3>
    <ul>
      <li>Content you create remains yours; you grant Sivio a license to use it for service operations and promotion.</li>
      <li>Sivio’s logos, branding, and platform content are the property of Sivio or its licensors.</li>
    </ul>

    <h3>7. Termination</h3>
    <ul>
      <li>Sivio may suspend or terminate accounts violating these Terms.</li>
      <li>Users may close their accounts at any time through the app settings.</li>
    </ul>

    <h3>8. Disclaimers & Limitation of Liability</h3>
    <ul>
      <li>Services are provided “as is” and “as available.”</li>
      <li>Sivio does not guarantee uninterrupted or error-free operation.</li>
      <li>Sivio is not liable for indirect, incidental, or consequential damages.</li>
    </ul>

    <h3>9. Governing Law & Dispute Resolution</h3>
    <ul>
      <li>These Terms are governed by the laws of the jurisdiction where Sivio operates.</li>
      <li>Disputes may be resolved through arbitration or courts as specified by law.</li>
    </ul>

    <p>By using Sivio, you acknowledge that you have read, understood, and agree to these Terms of Service.</p>
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

