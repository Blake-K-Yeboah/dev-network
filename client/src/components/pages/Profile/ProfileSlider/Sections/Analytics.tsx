import React from 'react'
import { inject, observer } from 'mobx-react'

const Analytics = inject('usersStore')(observer(({ usersStore, profile }) => {

    return (
        <div className={`analytics ${usersStore.activeTab !== "stats" ? 'hidden' : ''}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, blanditiis modi! Tempora modi explicabo ex? Quam nemo explicabo pariatur assumenda obcaecati autem laudantium odit consequatur, quia, excepturi modi molestiae! Nostrum id dicta vero accusamus quidem praesentium placeat nesciunt, suscipit, perspiciatis quos voluptatibus, natus pariatur iste minus. Itaque quia recusandae tempore asperiores commodi non, quibusdam eveniet ipsa dolor ducimus explicabo maiores magnam quam doloremque, praesentium necessitatibus est harum quasi accusantium. Minima, magnam perferendis. Fuga unde quidem veritatis in sed modi nihil quasi magnam, odit, eius, eum sunt. Molestias quae facere minima dolore ducimus beatae, totam adipisci praesentium repellat non nobis repellendus ea odit, sunt omnis quos ad suscipit quibusdam, cum est. Eveniet repudiandae blanditiis ullam iste doloribus sint, ipsam omnis ex officiis eaque quis suscipit atque laudantium quasi harum. Iusto dolore tempore laborum impedit quaerat cupiditate illo aperiam eaque eveniet esse inventore asperiores minus laudantium, excepturi repudiandae, ducimus perspiciatis maiores earum adipisci consequuntur! Dicta ea quis earum quae accusamus tempore vitae possimus qui ullam nam doloremque accusantium, inventore eius! Aut et modi ea perferendis, animi temporibus tenetur rem, quaerat quo atque blanditiis voluptas inventore laborum molestias quam recusandae nobis harum quae voluptatem ad, delectus iste. Nemo quidem cum ullam in, ab odit qui corporis sint dicta ea, magni nulla minus aut obcaecati dolorem non ut eos! Voluptate, dolore autem debitis, natus quaerat esse officia dignissimos tempora incidunt corporis qui aspernatur distinctio exercitationem iusto nisi quis fuga nulla pariatur aliquid. Voluptates deleniti expedita rerum incidunt reiciendis. Suscipit molestias quasi consequatur porro odit.
        </div>
    )
}))

export default Analytics