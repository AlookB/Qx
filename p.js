/*

PSExpress 23.49.1
2023.12.15
[rewrite_local]

https://lcs-mobile-cops.adobe.io/mobiles/access_profile/v3 url script-response-body https://raw.githubusercontent.com/AlookB/qx/refs/heads/main/p.js

[mitm] 

hostname = lcs-mobile-cops.adobe.io

*/



var objc = {
  "asnp": {
    "payload": "eyJpZCI6IjYxNmU3YjgwLWI3MWEtNGNiMi05MDEwLTFkOTQzNTQ3YTE3NiIsInNlcnZlcklkIjoibGNzIiwicmVzcG9uc2VUeXBlIjoiSU5JVElBTCIsInByb2ZpbGVTdGF0dXMiOiJQUk9GSUxFX0FWQUlMQUJMRSIsInByb2ZpbGVTdGF0dXNSZWFzb24iOjEwMDAsInByb2ZpbGVTdGF0dXNSZWFzb25UZXh0IjoiUHJvZmlsZSBBdmFpbGFibGUgZHVlIHRvIGFuIGFjcXVpcmVkIHBsYW4gcHJvdmlzaW9uZWQgYW5kIEFDVElWRSIsImFwcExpY2Vuc2VNb2RlIjoiRlJFRU1JVU0iLCJhcHBQcm9maWxlIjp7ImFwcElkIjoiUFNYSU9TMSIsImFjY2Vzc2libGVJdGVtcyI6W3sic3RhdHVzIjoiQUNUSVZFIiwic291cmNlIjp7Im93bmVyX2lkIjoiRTQyNjM3NEQ2MTJCMDdDQjBBNDk1RUJEQEFkb2JlSUQiLCJpZCI6IjQyQjlEQUYzRkM5MEExNTI3NzNBIiwidHlwZSI6IkxJQ0VOU0UiLCJzdGF0dXNfcmVhc29uIjoiTk9STUFMIiwiY2FuX2FjY2Vzc191bnRpbCI6NDA5MjU5OTM0OTAwMH0sImZ1bGZpbGxhYmxlX2l0ZW1zIjp7ImNjX3N0b3JhZ2UiOnsiZW5hYmxlZCI6dHJ1ZSwiZmVhdHVyZV9zZXRzIjp7IkNTX0xWTF8yIjp7ImlkIjoiQ1NfTFZMXzIiLCJsYWJlbCI6IkNTIExWTCAyIiwiZW5hYmxlZCI6dHJ1ZX0sIlZSVF8zMCI6eyJpZCI6IlZSVF8zMCIsImxhYmVsIjoiVlJUIDMwIiwiZW5hYmxlZCI6dHJ1ZX19LCJjaGFyZ2luZ19tb2RlbCI6eyJjYXAiOjEwMCwidW5pdCI6IkdCIiwibW9kZWwiOiJSRUNVUlJJTkciLCJvdmVyYWdlIjoiTkEiLCJyb2xsb3ZlciI6MH19LCJzcGFyayI6eyJlbmFibGVkIjp0cnVlLCJmZWF0dXJlX3NldHMiOnsiSU5EX1AiOnsiaWQiOiJJTkRfUCIsImxhYmVsIjoiSU5EIFAiLCJlbmFibGVkIjp0cnVlfX0sImNoYXJnaW5nX21vZGVsIjp7Im1vZGVsIjoiUkVDVVJSSU5HIiwib3ZlcmFnZSI6Ik5BIiwicm9sbG92ZXIiOjB9fSwic3RvY2tfbGltaXRlZCI6eyJlbmFibGVkIjp0cnVlLCJjaGFyZ2luZ19tb2RlbCI6eyJtb2RlbCI6IlJFQ1VSUklORyIsIm92ZXJhZ2UiOiJOQSIsInJvbGxvdmVyIjowfX0sInBob3Rvc2hvcF9leHByZXNzIjp7ImVuYWJsZWQiOnRydWUsImNoYXJnaW5nX21vZGVsIjp7Im1vZGVsIjoiUkVDVVJSSU5HIiwib3ZlcmFnZSI6Ik5BIiwicm9sbG92ZXIiOjB9fSwicGhvdG9zaG9wX2V4cHJlc3NfZmVhdHVyZV9hY2Nlc3MiOnsiZW5hYmxlZCI6dHJ1ZSwiY2hhcmdpbmdfbW9kZWwiOnsibW9kZWwiOiJSRUNVUlJJTkciLCJvdmVyYWdlIjoiTkEiLCJyb2xsb3ZlciI6MH19LCJjb3JlX3NlcnZpY2VzX2NjIjp7ImVuYWJsZWQiOnRydWUsImZlYXR1cmVfc2V0cyI6eyJDU19MVkxfMiI6eyJpZCI6IkNTX0xWTF8yIiwibGFiZWwiOiJDUyBMVkwgMiIsImVuYWJsZWQiOnRydWV9fSwiY2hhcmdpbmdfbW9kZWwiOnsibW9kZWwiOiJSRUNVUlJJTkciLCJvdmVyYWdlIjoiTkEiLCJyb2xsb3ZlciI6MH19fX1dLCJzZWNvbmRhcnlBcHBQcm9maWxlcyI6e319LCJ1c2VyUHJvZmlsZSI6eyJ1c2VySWQiOiJFNDI2Mzc0RDYxMkIwN0NCMEE0OTVFQkRAQWRvYmVJRCIsImZpcnN0TmFtZSI6ImFsYWluIiwibGFzdE5hbWUiOiJ5ZSIsImVtYWlsIjoiMzk1MDQ4MDE4QHFxLmNvbSIsImNvdW50cnlDb2RlIjoiQ04iLCJhY2NvdW50VHlwZSI6InR5cGUxIiwiZGlzcGxheU5hbWUiOiJ5ZSUyMGFsYWluIiwiYXV0aElkIjoiRTQyNjM3NEQ2MTJCMDdDQjBBNDk1RUJEQEFkb2JlSUQifSwiY29udHJvbFByb2ZpbGUiOnsibmdsQXBwSWQiOiJQU1hJT1MxIiwicmVxdWVzdGVyTmdsQXBwSWQiOiJQU1hJT1MxIiwiZGV2aWNlSWQiOiJGOEY0NkU2Mi05RjQwLTQ5OTgtOTNDMS0yMkE4NThFNkJCRDEiLCJkZXZpY2VEYXRlIjoiMjAyMy0xMi0xNFQyMzo1ODo0Ni4wNzYrMDgwMCIsIm5nbExpYlJ1bnRpbWVNb2RlIjoiTkFNRURfVVNFUl9PTkxJTkUiLCJjcmVhdGlvblRpbWVzdGFtcCI6MTcwMjU2OTUyNjI0NSwiY2FjaGVMaWZldGltZSI6Mzk5NzA4NzI3NTUsInZhbGlkVXB0b1RpbWVzdGFtcCI6NDA5MjU5OTM0OTAwMCwiY2FjaGVSZWZyZXNoQ29udHJvbCI6eyJhcHBSZWZyZXNoSW50ZXJ2YWwiOjg2NDAwMDAwLCJuZ2xMaWJSZWZyZXNoSW50ZXJ2YWwiOjg2NDAwMDAwfSwiZGV2aWNlVG9rZW5IYXNoIjoiNTc4NTMzOWI4Y2U1ZGI4MmE0ZTk1ZmViZjgyYzZkNTQ2OTMzY2ZhMjJlYjBhNTQ1ZWE5ZjQ0YjVhNmM2MDcyYjFlOTNlMDJhZmFiMzVkOGIzN2Y3OTcyMjJiZjVhMDhhMmRlY2MzZTZhMTJiZDc2MWRjMmIzYzA5ZDRkOTM2ZjQiLCJkZXZpY2VUb2tlbklkIjoiMTcwMjU2ODgxNjAzMF9lOTllZjRlMC04ZDU5LTRmNTYtOTViYS1iOTAzNTdlOGY3YWNfdWUxIiwib3NVc2VySWQiOiJJT1MiLCJjcmVhdGVkRm9yVmRpIjpmYWxzZSwiY2FjaGVFeHBpcnlXYXJuaW5nQ29udHJvbCI6eyJ3YXJuaW5nU3RhcnRUaW1lc3RhbXAiOjE3NDE5MzU1OTkwMDAsIndhcm5pbmdJbnRlcnZhbCI6MH0sImFwcFVzYWdlVHJhY2tpbmdDb250cm9sIjp7ImVuYWJsZWRUcmFja2luZyI6dHJ1ZSwicHJvdGVjdFRyYWNrZWREYXRhIjpmYWxzZSwiZXZlbnRzVG9UcmFjayI6WyJBUFBfTEFVTkNIX0NPVU5UIiwiQVBQX1JVTk5JTkdfVElNRSJdfSwibG9nQ29udHJvbCI6eyJsZXZlbCI6IklORk8iLCJtaW5GaWxlVXBsb2FkU2l6ZSI6MCwibWF4RmlsZVVwbG9hZFNpemUiOjEwMDAsInVwbG9hZEludGVydmFsIjo4NjQwMDAwMCwidXBsb2FkT25TZXNzaW9uU3RhcnQiOnRydWUsInVwbG9hZE9uRXJyb3IiOnRydWV9LCJvdmVycmlkZVN0YXR1c0ZvckxvY2FsU2lnbm91dCI6IlBST0ZJTEVfREVOSUVEIiwiZVRhZyI6IkRTczRDZ1RtamRhUGNtVF9qa2M4eUNiLTVER2kxOHA4WXQ5c2FBY0Q3b2tMTnVsZmVmMXNjcWVoZ0ZCZGNMTk4ifSwiZnJsUHJvZmlsZSI6Int9IiwibGVnYWN5UHJvZmlsZSI6IntcImxpY2Vuc2VJZFwiOlwiNDJCOURBRjNGQzkwQTE1Mjc3M0FcIixcImxpY2Vuc2VUeXBlXCI6MyxcImxpY2Vuc2VWZXJzaW9uXCI6XCIxLjBcIixcImVmZmVjdGl2ZUVuZFRpbWVzdGFtcFwiOjE3MjY5ODgzOTkwMDAsXCJncmFjZVRpbWVcIjowLFwibGljZW5zZWRGZWF0dXJlc1wiOltdLFwiZW5pZ21hRGF0YVwiOntcInByb2R1Y3RJZFwiOjIwNCxcInNlcmlhbEtleVwiOlwiOTk0MzA0MTcwMDIyODU2NzcyMzAwMjk2XCIsXCJjbGVhclNlcmlhbEtleVwiOlwiMTIwNDQ5Mzg3MDQ1OTU3OTEwNTdcIixcImxvY2FsZVwiOlwiQUxMXCIsXCJhc3NvY2lhdGVkTG9jYWxlc1wiOlwiQUxMXCIsXCJwbGF0Zm9ybVwiOjAsXCJpc2tcIjoyMDQ0MDE3LFwiY3VzdG9tZXJJZFwiOjAsXCJkZWxpdmVyeU1ldGhvZFwiOjMsXCJwY1wiOnRydWUsXCJyYlwiOmZhbHNlfX0iLCJhZGRpdGlvbmFsTGVnYWN5UHJvZmlsZXMiOiJ7fSJ9AAA=",
    "asnpSpecVersion" : "2.0"
  }
};

$done({ body: JSON.stringify(objc) });
