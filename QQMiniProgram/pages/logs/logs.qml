<view class="container log-list">
  <block wx:key="{{logs}}" wx:key-item="log">
    <text class="log-item">{{index + 1}}. {{log}}</text>
  </block>
</view>
