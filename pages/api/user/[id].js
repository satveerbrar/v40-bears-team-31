import connectToDatabase from '../../../utils/dbConnect'
import User from '../../../models/user'

export default async function handler(req, res) {
    const { method } = req
    connectToDatabase()

    switch (method) {
        case 'GET':
            try {
                const user = await User.findById(req.query.id)
                return res.status(200).json(user)
            } catch (err) {
                return res.status(500).json({ message: 'User Not found' })
            }
            break
        case 'PATCH':
            try {
                // Update logic pending
            } catch (err) {
                return res.status(500).json(err)
            }
            break
        case 'DELETE':
            try {
                const user = await User.findByIdAndDelete(req.query.id)
                return res.status(200).json(user)
            } catch (err) {
                return res.status(500).json(err)
            }
            break
        default:
            return res
                .status(400)
                .json({ message: 'Method type not supported' })
    }
}
