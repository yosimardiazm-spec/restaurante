import { useState } from 'react'
import { supabase } from './supabaseClient'
import { UtensilsCrossed, Calendar, Users, CheckCircle, AlertCircle } from 'lucide-react'

function App() {
    const [formData, setFormData] = useState({
        nombre: '',
        fecha: '',
        personas: ''
    })
    const [status, setStatus] = useState({ type: '', message: '' })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setStatus({ type: '', message: '' })

        try {
            const { error } = await supabase
                .from('reservas')
                .insert([
                    {
                        cliente: formData.nombre,
                        fecha: formData.fecha,
                        personas: parseInt(formData.personas)
                    }
                ])

            if (error) throw error

            setStatus({ type: 'success', message: '¡Reserva confirmada con éxito!' })
            setFormData({ nombre: '', fecha: '', personas: '' })
        } catch (error) {
            console.error('Error:', error)
            setStatus({ type: 'error', message: 'Error al processar la reserva. Inténtalo de nuevo.' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero Section */}
            <div className="relative h-96 bg-gray-900">
                <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
                    alt="Restaurant Interior"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                    <UtensilsCrossed size={64} className="mb-4 text-brand-500" />
                    <h1 className="text-5xl font-bold mb-4 tracking-tight">El Sabor Digital</h1>
                    <p className="text-xl text-gray-200 max-w-2xl">
                        Una experiencia culinaria inolvidable donde la tradición se encuentra con la tecnología.
                    </p>
                </div>
            </div>

            {/* Reservation Section */}
            <div className="flex-1 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="bg-brand-600 py-6 px-8">
                        <h2 className="text-2xl font-bold text-white text-center">Reserva tu Mesa</h2>
                    </div>

                    <div className="p-8">
                        {status.message && (
                            <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                                }`}>
                                {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                                <p className="text-sm font-medium">{status.message}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Nombre del Cliente
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="nombre"
                                        required
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        className="w-full pl-3 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                                        placeholder="Ej. Juan Pérez"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Fecha de Reserva
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Calendar size={18} className="text-gray-400" />
                                    </div>
                                    <input
                                        type="date"
                                        name="fecha"
                                        required
                                        value={formData.fecha}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Número de Personas
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Users size={18} className="text-gray-400" />
                                    </div>
                                    <input
                                        type="number"
                                        name="personas"
                                        min="1"
                                        max="20"
                                        required
                                        value={formData.personas}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                                        placeholder="2"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Procesando...' : 'Confirmar Reserva'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
