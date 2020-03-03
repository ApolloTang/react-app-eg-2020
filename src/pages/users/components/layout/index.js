import React from 'react'

import s from './style.module.less'

const PageLayout = ({
  UsersCatelog,
  WorkspaceControl,
  Workspace,
}) =>  {
  return (
    <div className={`userpage_layout ${s.moduleStyle}`} >

      <div className={`left_pannel ${s.leftPannel}`} >
        <div className="scroll-content">
          <UsersCatelog />
        </div>
      </div>

      <div className={`gut ${s.gut}`} />

      <div className={`right_pannel ${s.rightPannel}`} >

          <div className={`head ${s.head}`} >
            <div className={`head_content ${s.headContent}`}>
              {WorkspaceControl}
            </div>
          </div>

          <div className={`h_gut ${s.hGut}`} />

          <div className={`body ${s.body}`} >
            <div className={`body_content ${s.bodyContent}`} >
              <Workspace />
            </div>
          </div>

      </div>
    </div>
  )
}

export { PageLayout as UsersPageLayout }

