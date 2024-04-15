---
weight: 300
title: "Organizations"
description: "Manage organizations in snapsite."
icon: "folder"
date: "2023-05-22T00:34:57+01:00"
lastmod: "2023-05-22T00:34:57+01:00"
draft: false
toc: true
---

In snapsite building sites are in organizations and users bellongs to organization.

Users can have different rights on organizations.

Anyone can register an organization.

## Roles

In snapsite there are 5 possible roles:
- Owner
- Manager
- Editor
- Shooter
- Viewer

Roles are applied on _Organizations_, _Building Sites_ and _Folders_ with a cascading logic. The role assigned for a resource for a user will be applied automatically on everything what is bellow in the tree.

For example a user could be _shooter_ on the entire organization, _editor_ on a single building site and _manager_ on a folder, of the same building site or of an other building site.

When a 

|Action|Owner|Manager|Editor|Shooter|Viewer|
|------|-----|-------|------|-------|------|
|Change permissions on organization|yes|yes, can not change _owner_'s permissions||||
|Change billing settings of organization|yes|||||
|List building sites|all|all|assigned only|assigned only|assigned only|