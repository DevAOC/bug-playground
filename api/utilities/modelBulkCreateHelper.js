import { api } from "gadget-server"

export default ({ }) => {
  const queue = { name: "dedicated-queue", maxConcurrency: 1 }
  const arr = []

  for (let i = 0; i < 2000; i++) {
    arr.push({ name: "foobar" })
  }

  await api.enqueue(api.bga2, { arr, queue }, { queue: { ...queue } })
}

